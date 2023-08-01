# CSS selector performance bench

This app contains a demo usages of different types of CSS selectors to show the performance impact of them. Each example has:

* Bad example - selector that can incur cost
* Good example - applying style rules directly on elemnts using CSS classes

## Start

* npm install
* npm run dev
* visit http://localhost:5713


## Usage

The examples follow a consistent pattern to help with profiling. Each example has a single `toggle` button that performs some kind of CSS/DOM mutation that should be profiled to check the affected elements and selector matching in a performance profile.

Each scenario has a README that describes the intention behind the example and what the impacts are.

Each example is located under the `src/scenarios` folder.