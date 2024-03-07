<?php

/**
 * Buildings template
 * This PHP file loads the default post content and the related buildings,
 * so you can display both the buildings and the post content on the same page
 */

$context = Timber::context();

$timber_post     = Timber::get_post();
$context['post'] = $timber_post;

// Query the custom post type 'buildings'
$buildings_args = array(
	'post_type' => 'buildings',
	'posts_per_page' => 25, // Adjust as needed
	'paged' => get_query_var('paged') ? get_query_var('paged') : 1,
);

$context['buildings'] = Timber::get_posts($buildings_args);



Timber::render(array('page-buildings.twig'), $context);
