# Blexr Bet Calculator Plugin

Blexr Bet Calculator Plugin able to calculate how much a bet returns for any given stake. Multiple odds supported along with American, Fractal, and Decimal formats.

Plugin also provides the "Latest sports odds data table". The odds data are fetching from a public API as a guideline to help users with making decisions on what bets they want to place.

## Installation

Steps to install:
- Go to the plugin page from the WordPress Plugin Directory website.
- Click on Add new button to upload the plugin file
- Click on Upload plugin button, and select plugin zip file
- Click on Install now button

We can use the shortocode to show the calculator on front end
Steps to use shortcode:
- Go to wp admin > pages > gutenberg editor
- Choose "shortcode block" to run the calculator
```sh
[blexr_bet_calculator] 
```

To display the sports data, we can select the gutenberg block from the wp admin with title,
- After adding the custom block, the table will only appeer on the front end and not in the wp admin
```sh
Sports Odd Data Table
```

## Tech

Plugin uses the below to work:
- WordPress 
- MySQL
- PHP
- HTML 
- CSS
- SCSS
- ES6
