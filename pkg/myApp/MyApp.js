/**
 * @license
 * Copyright (c) 2022 Google LLC All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */
import {App, LocalStoragePersistor, themeRules} from './conf/support.js';
import {MyRecipe} from './MyRecipe.js';

export const MyApp = class extends App {
  constructor() {
    super({themeRules});
    this.persistor = LocalStoragePersistor;
    this.userAssembly = [MyRecipe];
  }
};
