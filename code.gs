// this code will find all the hyperlinks and highlight them 

const countHyperlinks = () => {
  let highlightColor = {[DocumentApp.Attribute.BACKGROUND_COLOR]:'#FFFF00'};
  let doc = DocumentApp.getActiveDocument();
  let body = doc.getBody();
  let child = body.getParagraphs().length
  for(let i=0; i<child; i++) {
   var el = body.getChild(i);
   if(el.getText()!= ""){
    let searchText = body.findText(el.getText())
    let url = searchText.getElement().getLinkUrl();
    if(url!= null){
      searchText.getElement().setAttributes(highlightColor)
    }
   }
  }
}
