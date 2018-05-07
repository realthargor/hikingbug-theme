# Materialize Ghost Theme
[Ghost](http://www.ghost.io) theme based on [materialize](http://materializecss.com/)

## Features
* responsive
* uses semantic html elements
* sidebar with tags and RSS-Feed
* burger menu and sidebar navigation for mobile
* translation for en and de
* three images sizes inside posts
* fullscreen zoom for images inside a posts
* tour Page with
 * flickr Gallery integration
 * link to tour reports
 * cards with revealable details
 * statistics table
 * OpenStreetMap integration to view GPX track with fullscreen support
* reading time
* clean page to show all post with a tag using smaller cards


## Install
1. upload zip file
1. activate theme
1. adjust language
1. create pages **/legal** and **/dataprotection**. Otherwise remove the links from _default.hbs_
1. (optional) add a menu item for **/tours** and create a page with this URL, modify the file _page-tours.hbs_ and upload GPX files.

## Example post

Example Post to demonstrate how to use the different image sizes in a post.

```##  Subheader

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

### Supsupheader

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

![](/content/images/sampleimage.jpg)

![](/content/images/sampleimage.jpg#medium) ![](/content/images/sampleimage.jpg#medium)

![](/content/images/sampleimage.jpg#small) ![](/content/images/sampleimage.jpg#small) ![](/content/images/sampleimage.jpg#small)

Have fun!```
