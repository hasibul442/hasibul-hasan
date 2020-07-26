var tabbuttons=document.querySelectorAll(".tabContainer .buttoncontainer button");
var tabpanels=document.querySelectorAll(".tabContainer .tabpanel");
function showpanel(panelIndex,ColorCode){
    tabbuttons.forEach(function(node){
            node.style.backgroundColor="";
            node.style.color="";
    });
    tabbuttons(panelIndex).style.backgroundColor=ColorCode;
    tabbuttons(panelIndex).style.color="transparent";
    tabpanels.forEach(function(node){
        node.style.display="none";
    });
    tabpanels[panelIndex].style.display="block";
    tabpanels[panelIndex].style.backgroundColor="transparent";

}