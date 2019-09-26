<script>
 datUpdated = new Date(document.lastModified) ;
 datMonth = datUpdated.getMonth() + 1 ;
 datDate = datUpdated.getDate() ;
 datYear = datUpdated.getYear() ;
 document.write("<i>Last Updated: " + datMonth + "/" + datDate + "/" + datYear + "</i>") ;
 </script>