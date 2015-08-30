![EasyDrafter Logo](/logo.png)

EasyDrafter is a web app created by Allison Craig which is used to create clothing pattern blocks for DIY enthusiasts.
In traditional clothing patternmaking, drafting blocks can take a lot of time and have human error. My app makes it quick and easy to make a block so the pattern drafter can get to making more complex patterns quicker. 

## Table of Contents
* [About The Project](#about)
* [Terminology](#terms)
* [Technologies Used](#technologiesused)
* [Drafting with Canvas](#drafting)
* [Author](#author)

## <a name="terms"></a>Terminology
#### Pattern Block
A pattern block is a template pattern used in creating clothing patterns. This base pattern is the basic shape of a garnment with which you manipulate to create a specific style. This block does not include seam allowance needed to sew it into an actual garnment. This needs to be added by the pattern maker.
#### Drafting
Drafting is the process of creating your patterns. This can include creating pattern blocks or creating the final patterns with style and seam allowance added.

## <a name="technologiesused"></a>Technologies Used
* Javascript
* [Python](https://www.python.org/)
* [Flask](http://flask.pocoo.org/)
* [Flask - SQLAlchemy](http://flask.pocoo.org/)
* [jQuery](https://jquery.com/)
* [Jinja2](http://jinja.pocoo.org/docs/dev/)
* [Bootstrap"](http://getbootstrap.com/2.3.2/)
* [jsPDF](https://parall.ax/products/jspdf)

## <a name="drafting"></a>Drafting with Canvas
####Using HTML5
HTML5 Canvas was used to draft my pattern blocks. Canvas uses a system of (x,y) axis on a grid that starts at (0,0) at the top left corner. This was counter intuitive to how blocks are drafted by hand but it was a fun challenge. 

## <a name="drafting"></a>Behind The User Drafting Expirience

####Selecting Base Measurements
On the first page of inputs a user sees when drafting with this app, the user must input 2 basic measurements which vary depending on the type of block.
When they hit "next", the server looks for these measurements and determines a template block that fits the user the best from the database.
The Flask Server determines these measruements by looking at the ratio of the two measurements, determines which is the more dominant measurement. It then queries the database for the block that will fit that dominant measurement.
These measurements are stored in the session for use in drafting. The template measurements are passed onto the drafting pages via Jinja templating, which selected by my Javascript drafting algorithms using jQuery.


####Making Drafts React to Input
While in the drafting screens, the user can change measurements in the inputs with triggers and event with jQuery to clear the previous draft and draft a new block with the new measurements. 


####Storing Measurements
After the user hits next on any drafting page, the Flask server 


## <a name="math"></a>Calculating The Block
The main component of this app is the pattern drafting algorithms which were created to mimic traditional pattern drafting techniques using HTML5 Canvas and Javascript.
I created many functions to specialy help me calculate the axis of a specific coordinate. Many of my functions are based on the geometry of right triangles.

## <a name="v2"></a>Version 2.0

## <a name="author"></a>Author
Allison Craig is a software engineer from San Francisco, CA.