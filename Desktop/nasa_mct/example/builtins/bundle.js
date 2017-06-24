/*****************************************************************************
 * Open MCT, Copyright (c) 2014-2017, United States Government
 * as represented by the Administrator of the National Aeronautics and Space
 * Administration. All rights reserved.
 *
 * Open MCT is licensed under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 * Open MCT includes source code licensed under additional open source
 * licenses. See the Open Source Licenses file (LICENSES.md) included with
 * this source code distribution or the Licensing information page available
 * at runtime from the About dialog for additional information.
 *****************************************************************************/
/*global define*/

define([
    "./src/ExampleController",
    "./src/ExampleDirective",
    "./src/ExampleService",
    'legacyRegistry'
], function (
    ExampleController,
    ExampleDirective,
    ExampleService,
    legacyRegistry
) {
    "use strict";

    legacyRegistry.register("example/builtins", {
        "name": "Angular Built-ins Example",
        "description": "Example showing how to declare extensions with built-in support from Angular.",
        "sources": "src",
        "extensions": {
            "controllers": [
                {
                    "key": "ExampleController",
                    "implementation": ExampleController,
                    "depends": [
                        "$scope",
                        "exampleService"
                    ]
                }
            ],
            "directives": [
                {
                    "key": "exampleDirective",
                    "implementation": ExampleDirective,
                    "depends": [
                        "examples[]"
                    ]
                }
            ],
            "routes": [
                {
                    "templateUrl": "templates/example.html"
                }
            ],
            "services": [
                {
                    "key": "exampleService",
                    "implementation": ExampleService
                }
            ]
        }
    });
});
