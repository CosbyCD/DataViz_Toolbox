Console.log(‘I am here’);
Let viz
Const containerdiv = document.getelementbyid(“vizcontainer”)
Const url = "https://public.tableau.com/views/AnalysisofSalesandRetaildata_16954884549230/Story1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"
Const options = {Hide tabs: true,}
Function initviz() {viz = new tableau.viz(containerdiv, url, options}
Document.addeventlistener(‘DOMcontentloaded’),initviz);
console.log('Is this working?');

let viz;

//Add Share Link to Tableau Public in here
const url = "https://public.tableau.com/views/AnalysisofSalesandRetaildata_16954884549230/Story1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link";

const vizContainer = document.getElementById('vizContainer');
const options = {
    hideTabs: true,
    height: 1000,
    width: 1200,
    onFirstInteraction: function() {
        workbook = viz.getWorkbook();
        activeSheet = workbook.getActiveSheet();
        console.log("My dashboard is interactive");
    }
};

//create a function to generate the viz element
function initViz() {
    console.log('Executing the initViz function!');
    viz = new tableau.Viz(vizContainer, url, options);
}

// run the initViz function when the page loads
document.addEventListener("DOMContentLoaded", initViz);

const exportPDF = document.getElementById('exportPDF');
const exportImage = document.getElementById('exportImage');


//click on the pdf button to generate pdf of dashboard
function generatePDF() {
    viz.showExportPDFDialog()
}

exportPDF.addEventListener("click", function () {
    generatePDF();
  });

//click on image to generate image of dashboard
function generateImage() {
    viz.showExportImageDialog()
}

exportImage.addEventListener("click", function () {
    generateImage();
  });
 34 changes: 16 additions & 18 deletions34  
index.html
@@ -1,28 +1,26 @@
<html>
<head>

    <title>Basic Embed</title>

    <script type="text/javascript"
	    src="https://public.tableau.com/views/AnalysisofSalesandRetaildata_16954884549230/Story1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"></script>
    <script type="text/javascript">
        function initViz() {
            var containerDiv = document.getElementById("vizContainer"),
                url = "https://public.tableau.com/views/AnalysisofSalesandRetaildata_16954884549230/Story1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link",
                options = {
                    hideTabs: true,
                    onFirstInteractive: function () {
                        console.log("Run this code when the viz has finished loading.");
                    }
                };

            var viz = new tableau.Viz(containerDiv, url, options);
            // Create a viz object and embed it in the container div.
        }
    </script>
	    src="https://public.tableau.com/javascripts/api/tableau-2.min.js"></script>
    <script type="text/javascript"></script>

</head>

<body onload="initViz();">
    <div id="vizContainer" style="width:800px; height:700px;"></div>
<body>

  <h1>Embedding Tableau</h1>

    <button id = "exportPDF">Generate PDF</button>
    <button id = "exportImage">Generate Image</button>


    <div id="vizContainer"></div>

    <script src="./app.js"></script>

</body>

</html>