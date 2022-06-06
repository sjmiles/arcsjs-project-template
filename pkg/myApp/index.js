/**
 * @license
 * Copyright (c) 2022 Google LLC All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */

// configurable dependencies
import './conf/support.js';

// factored out for ease of testing
import {MyApp} from './MyApp.js';

// spin up application
await (globalThis.App = new MyApp()).spinup();
