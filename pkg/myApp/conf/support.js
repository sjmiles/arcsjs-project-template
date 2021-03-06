/**
 * @license
 * Copyright (c) 2022 Google LLC All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */
// low-level config is first
import './config.js';
// import arcsjs-core dependency
export * from '../../arcsjs-core.js';
// import support systems
import {Paths, importModules} from '../../arcsjs-support.js';

// DOM related
export const {
  loadCss,
  Resources,
  XenSurface: Surface
} = await importModules(async path => import(path), [
  '$library/App/resources.js',
  '$library/Dom/dom.js',
  '$library/Dom/surfaces/xen/xen-surface.js',
  '$library/Dom/material-xen/material-xen.js',
  '$library/Dom/mwc/mwc.min.js',
  '$library/Dom/arcs-elements/arcs-elements.js',
  '$library/Dom/surfaces/xen/surface-walker.js',
  '$library/DevTools/resource-view.js',
  '$library/Media/image-resource.js',
  '$library/Media/media-stream/video-view.js'
]);

// material icon font
await loadCss(Paths.resolve('$library/Dom/material-icon-font/icons.css'));

// general purpose
export const {
  App,
  themeRules,
  LocalStoragePersistor,
  RecipeService,
  StoreUpdateService
} = await importModules(async path => import(path), [
  '$library/App/App.js',
  '$library/App/theme.js',
  '$library/App/storage.js'
]);
