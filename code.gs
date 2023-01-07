// The code will find all hyperlink and highlight them within the google docs including paragraph and table's data.
// Demo Doc = https://docs.google.com/document/d/16cbYg-g2pjpcBuUserhrCRfJw7VcHaXGvtmL0LxMzko/edit

const countHyperlinsks = () => {
  let highlightColor = {[DocumentApp.Attribute.BACKGROUND_COLOR]:'#FFFF00'};
  let doc = DocumentApp.getActiveDocument();
  let body = doc.getBody();
  let paraChild = body.getParagraphs()
  paraChild.forEach((ele,i)=>{
    if(ele.getText()!=""){
      let searchtext = body.findText(ele.getText());
      let url= searchtext.getElement().getLinkUrl();
      if(url!=null){
        searchtext.getElement().setAttributes(highlightColor)
      }
    }
  })
}
