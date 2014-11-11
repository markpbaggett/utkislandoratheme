# Islandora Blocks / Regions Definitions
---
#### Introduction and Things to do First
This document defines each custom block and the region to which it is assigned within the SIS theme.  It also lists all the existing Content sections and what they are set to. We are not using the UTK theme as default.  Here is a list of things that need to be checked before doing anything else:

* We are using **SIS** as our theme--not UTK.  Make sure that SIS is set to default.
* We are using the Seven theme for the theme for our Admin screens.  This must be enabled.
* **Content Authoring** for **Text Formats** must be edited so that **plain text** has no enabled filters.  You can edit this from the configuration menu:

![Image of Content Authoring Settings](http://dlwork.lib.utk.edu/mark/images/ContentAuthoring.png "Content Authoring Settings for Plain Text")



---

#### An Explanation of Regions within the SIS Theme

Our theme is divided into zones and regions.  [This document](https://docs.google.com/drawings/d/15E0t9Xd40OV-TteZ0Qs8OiSNY0xT3xc8gVp9yRnH5ss/edit?usp=sharing) demonstrates how each zone and region is defined.  

Each custom block is assigned a region in which it lives.  This is done through the **Structure > Blocks** part of the **Admin toolbar**.

![Image of Zones & Regions in SIS Theme](http://dlwork.lib.utk.edu/mark/images/IslandoraRegions.png "Theme Regions and Zones")

---

#### How to Assign Blocks to a Region:

You can assign a block to a region by clicking **Structure > Blocks** in the Admin bar. Here is an example:

![Image of Assigning Blocks to a Region](http://dlwork.lib.utk.edu/mark/images/BlockAssignmentExample.png "Assigning Blocks to a Region")

#### Theme Related Blocks (Appears on All Pages)

There are several blocks that must be turned on in order to make the theme work.  These blocks should work out of the box with the existing CSS and JS.

**Giving Block**

* Assigned to UTK Giving
* Appears on All Pages

**Digital Collections UTK Logo**

* Assigned to Header First
* Appears on All Pages

**Digital Collections Toolbox Bar**

* Assigned to Header Second
* Appears on All Pages
* **NOTE:** This must appear before the **Digital Collections UTK Search** on the main blocks page. You can drag it up one if needed.

**Digital Collections Footer Map**

* Assigned to UTK Footer First
* Appears on All Pages

**Digital Collections UTK Indicia**

* Assigned to UTK Indicia
* Appears on All Pages

**Propogating Nav from Library Website**

* Assigned to Menu
* Appears on All Pages

**Digital Collections Footer Nav 1**

* Assigned to UTK Footer Second
* Appears on All Pages

**Digital Collections Footer Nav 3**

* Assigned to UTK Footer Third
* Appears on All Pages

**Digital Collections Footer Nav 2**

* Assigned to UTK Footer Fourth
* Appears on All Pages

**Digital Collections UTK Search**

* Assigned to Header Second
* Appears on All Pages
* **NOTE:** This must appear after the **Digital Collections Toolbox Bar** on the main blocks page. You can drag it down one if needed.

**Collection Search**

* Assigned to Splash Search
* Appears on All Pages


---

#### Collection Specific Blocks

There are 4 blocks associated with each collection: a banner, an introduction link, a browse link, and Content for the splash page.  The example below can be used for each subsequent collection:

**Derris Slide Banner**

* Assigned to Splash Banner
* Appears only on:
	* \*derriscollection (or whatever the alias is for the page created through **Content**)
	* *derris: (this is what makes things appear on individual item pages--use whatever the child PID begins with)
	* *gsmrc:derris (this is what makes things appear on browse--use whatever the parent PID is)

**Derris Slide Introduction**

* Assigned to Splash Introduction
* Appears only on:
	* \*derriscollection (or whatever the alias is for the page created through **Content**)
	* *derris: (this is what makes things appear on individual item pages--use whatever the child PID begins with)
	* *gsmrc:derris (this is what makes things appear on browse--use whatever the parent PID is)	
**Derris Slide Browse**

* Assigned to Splash Browse
* Appears only on:
	* \*derriscollection (or whatever the alias is for the page created through **Content**)
	* \*derris: (this is what makes things appear on individual item pages--use whatever the child PID begins with)
	* \*gsmrc:derris (this is what makes things appear on browse--use whatever the parent PID is)

**Derris Splash Page**

* Assigned to Content
* Appears only on:
	* \*derriscollection (or whatever the alias is for the page created through **Content**)


---

#### Islandora System Blocks

These are the blocks required by Islandora:

**Islandora displays**

* Assigned to Content
* Appears on all pages

**Islandora Facets**

* Assigned to Sidebar First
* Appears on all pages


---

#### Other Required Blocks

There are a few blocks that are Drupal related that need to be turned on.  They are:

**User Login**

* Assigned to Sidebar First
* Appears only on *login
	* Note: You may need to create the login page through Content

**Main Page Content**

* Assigned to Content in both **SIS and Seven (administration theme)**
* Appears on All Pages

**System Help**

* Assigned to Content in both **SIS and Seven (administration theme)**
* Appears on All Pages

---

#### Content 

The Content section of the Admin interface includes all custom pages.  Here is a list of what's currently defined:

**Digital Collections**

* URL alias is set to index
* It has a body section.  See the html file for BasicPage_digitalcollections for how this is defined.

**Login**

* URL alias is set to login
* It does not have a body

**Derris Collection**

* URL alias is set to derriscollection
* It does not have a body