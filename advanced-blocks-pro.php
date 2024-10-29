<?php

/**
 * Plugin Name:       Advanced Blocks Pro
 * Plugin  URI: 	  https://advancedblocks.pro
 * Description:       Transform your web page creation process with the Advanced Blocks Pro in Gutenberg editor's dynamic and feature-rich blocks. Select from a wide range of options, all specially designed to meet your needs and bring your vision to life. With the numerous customization options available for each block, you have the ability to craft visually stunning web pages with ease.
 * Author URI: 		  https://advancedblocks.pro/
 * Version:           1.0.0
 * Author:            Essa Mamdani
 * Text Domain:       advanced-blocks-pro
 * Domain Path:       /languages languages folder path
 * Requires at least: 6.0
 * Requires PHP:      7.0
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 *
 * @package           advanced-blocks-pro
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

namespace Advanced_Blocks_Pro;

//  Exit if accessed directly.
defined('ABSPATH') || exit;
define("ADVANCEDBLOCKSPRO_PATH", __DIR__);

require_once(__DIR__ . "/vendor/autoload.php");
require_once(__DIR__ . "/includes/src/helper.php");
require_once(__DIR__ . "/includes/src/filters.php");
require_once(__DIR__ . "/lib/block-categories.php");
require_once(__DIR__ . "/lib/block-filters.php");
 
function _get_plugin_url()
{
	static $plugin_url;

	if (empty($plugin_url)) {
		$plugin_url = plugins_url(null, __FILE__);
	}

	return $plugin_url;
}

add_action('init',  __NAMESPACE__ . '\create_block_new_one_block_init');

function create_block_new_one_block_init()
{
	foreach (glob(change_ds(__DIR__ . "/build/*/block.json")) as $file) {
		$block = json_decode(file_get_contents($file), true);
		$render = [];

		if (isset($block['dynamic'])) {
			$render['render_callback'] = "\\Advanced_Blocks_Pro\\" . $block['dynamic'];
		}

		register_block_type(dirname($file), $render);
	}
	wp_enqueue_style('load-fa',  _get_plugin_url() . "/helper/icon-picker/css/all.min.css");
	wp_enqueue_style('splide-style', _get_plugin_url() . "/helper/splide/splide.min.css");
}

function option_block($attributes, $content, $block)
{
	$wrapper_attributes = get_block_wrapper_attributes();
	if ($block->context['field_type'] === 'select') {
		$output = "<option class='$wrapper_attributes' value='{$attributes['field_value']}'>{$attributes['field_label']}</option>";
	} elseif ($block->context['field_type'] === 'radio' || $block->context['field_type'] === 'checkbox') {
		$input_type = $block->context['field_type'];
		$input_value = $attributes['field_value'];
		$input_id = $attributes['field_id'];
		$input_name = $block->context['field_type'] === 'radio' ? $block->context['field_name'] : $attributes['field_name'];
		$input_required = $block->context['required_toggle'] ? 'required' : '';

		$output = "<span class='$wrapper_attributes em-field-option'>
        <input type='$input_type' value='$input_value' id='$input_id' name='$input_name' $input_required />
        <label>{$attributes['field_label']}</label>
    </span>";
	}

	return $output;
}

function block_js_filter()
{
	wp_enqueue_script(
		"new-block-filter",
		plugins_url(null, __FILE__) . '/dist/filter.min.js',
		['wp-dom-ready', 'wp-plugins', 'wp-element', 'wp-edit-post', 'wp-i18n', 'wp-api-request', 		'wp-data', 'wp-components', 'wp-blocks', 'wp-editor', 'wp-compose', 'wp-hooks', 'lodash'],
		filemtime(change_ds(__DIR__ . '/dist/filter.min.js'))
	);
}

add_action('enqueue_block_editor_assets', __NAMESPACE__ . '\block_js_filter', null, 100);


function filter_metadata_registration1($metadata)
{
	if (str_contains($metadata['name'], "advanced-blocks-pro")) {
		$advancedBlocksPro = $metadata["supports"]['advancedBlocksPro'];
		if (!empty($advancedBlocksPro)) {

			$fields = combine_fields($advancedBlocksPro);
			$attr = combine_attributes($fields);
			$extract = extract_attributes($attr, $metadata['name']);

			$metadata['attributes'] = array_merge($metadata['attributes'], $extract['attributes']);
			$metadata["supports"]['advancedBlocksPro'] = $extract['js_attributes'];
		}
	}
	return $metadata;
};
add_filter('block_type_metadata',  __NAMESPACE__ . '\filter_metadata_registration1');

add_filter('upload_mimes', function ($mime_types) {
	$mime_types['svg']  = 'image/svg+xml';
	$mime_types['svgz'] = 'image/svg+xml';
	return $mime_types;
});
