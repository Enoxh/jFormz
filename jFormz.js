   
        function Jformz(){
        this.dClass ='form-control';      
        this.priBtn ='btn btn-primary';  
        this.fClass = 'form';    
        this.empty =''
        }
        
        //OPEN A FORM   
        Jformz.prototype.openForm = function(jAction,jMethod,jId,jClass,jName){
        var j = '<form action="'+jAction+'" class="'+jMethod+'" name="'+jName+'"  id="'+jId+'" />';
        return j;     
        }  
        
        
        //MAKE A LABEL
        Jformz.prototype.formLabel = function(jText,jClass){
        var j = '<label clas="'+jClass+'">'+jText+'</label>';
        return j;     
        }   
        
        //TEXT INPUT
        //TEXT INPUT
        Jformz.prototype.inputText = function(jId,jClass,jName,jPh,jVal,jRequire){
        var j = '<input type="text" id="'+jId+'" class="'+jClass+'" name="'+jName+'" placeholder="'+jPh+'" value="'+jVal+'" '+jRequire+' />';
        return j;     
        }
  
       //GENERIC INPUT (email, search, tel, url, etc)
        Jformz.prototype.genInput = function(jType,jId,jClass,jName,jPh,jVal,jRequire){
        var j = '<input type="'+jType+'" class="'+jClass+'" name="'+jName+'" placeholder="'+jPh+'" value="'+jVal+'" '+jRequire+' />';
        return j;     
        }        

        //NUMBER INPUT
        Jformz.prototype.numInput = function(jId,jClass,jName,jMin,jMax,jStep,jRequire){
        var j = '<input type="number" id="'+jId+'" class="'+jClass+'" name="'+jName+'" min="'+jMin+'" max="'+jMax+'"  step="'+jStep+'"'+jRequired+'>';
        return j;     
        }          
        
        //DATE INPUT
        Jformz.prototype.dateInput = function(jId,jClass,jName,jMin,jMax,jRequire){
        var j = '<input type="date" class="'+jClass+'" name="'+jName+'" min="'+jMin+'" max="'+jMax+'" id="'+jId+'" '+jRequire+' />';
        return j;     
        }        
        
        //COLOR INPUT
        Jformz.prototype.colorInput = function(jId,jClass,jName,jRequire){
        var j = '<input type="color" class="'+jClass+'" name="'+jName+'"  id="'+jId+'" '+jRequire+' />';
        return j;     
        }    

        //MONTH INPUT
        Jformz.prototype.monthInput = function(jId,jClass,jName,jRequire){
        var j = '<input type="month" class="'+jClass+'" name="'+jName+'"  id="'+jId+'" '+jRequire+' />';
        return j;     
        }         

        //WEEK INPUT
        Jformz.prototype.weekInput = function(jId,jClass,jName,jRequire){
        var j = '<input type="week" class="'+jClass+'" name="'+jName+'"  id="'+jId+'" '+jRequire+' />';
        return j;     
        }         

        //RANGE INPUT
        Jformz.prototype.rangeInput = function(jId,jClass,jName,jMin,jMax,jStep,jRequire){
        var j = '<input type="range" id="'+jId+'" class="'+jClass+'" name="'+jName+'" min="'+jMin+'" max="'+jMax+'"  step="'+jStep+'"'+jRequired+'>';
        return j;     
        }
        
        //RADIO BUTTON
        Jformz.prototype.radioInput = function(jId,jClass,jName,jVal,jChkd,jRequire){
        var j = '<input id="'+jId+'" class="'+jClass+'" type="radio" name="'+jName+'" value="'+jVal+'" '+jChkd+' '+jRequire+'> ';
        return j;     
        }       
        
        //CHECKBOX
        Jformz.prototype.checkBoxInput = function(jId,jClass,jName,jVal,jChkd,jRequire){
        var j = '<input id="'+jId+'" class="'+jClass+'" type="checkbox" name="'+jName+'" value="'+jVal+'" '+jChkd+' '+jRequire+'> ';
        return j;     
        }        
        
        //TEXTAREA
        Jformz.prototype.textArea = function(jId,jClass,jName,jHtchml){
        var j = '<textarea id="'+jId+'" class="'+jClass+'" name="'+jName+'">'+jHtchml+'</textarea>';
        return j;     
        }  

        //SELECT LIST
        Jformz.prototype.selectList= function(jId,jClass,jName,jVals= [['','']]){        
        var j = '<select id="'+jId+'" class="'+jClass+'" name="'+jName+'">';
        for(var i=0;i<jVals.length;i++){
        j +='<option ="'+jVals[i][0]+'">'+jVals[i][1]+'</option>';    
        }
        j +='</select>';
        return j;     
        }        
        
        //LINE BREAK
        Jformz.prototype.br = function(){
        var j = '</br>';
        return j;     
        }        
        
        //SUBMIT BUTTON
        Jformz.prototype.submitBtn = function(jName,jId,jClass,jVal){
        var j = '<input type="submit" name="'+jName+'" value="'+jVal+'" class="'+jClass+'" id="'+jId+'">';
        return j;     
        }   
        
        //CLOSE FORM
        Jformz.prototype.closeForm = function(){
        var j = '</form>';
        return j;     
        }         
        
        //HTML ELEMENTS
        //GET HTML Element by ID
        Jformz.prototype.getElem = function(jId){
        var j = document.getElementById(jId);
        return j;     
        }   
               
        //GET HTML Elements by class name returns array
        Jformz.prototype.getByClass = function(jClass){
        var j = document.getElementsByClassName(jClass);
        return j;     
        }        
        
        //GET HTML Elements by tag name returns array
        Jformz.prototype.getByTag= function(jTag){
        var j = document.getElementsByTagName(jTag);
        return j;     
        }        
        
        //SHOW VIEW
        Jformz.prototype.showView = function(jId,jView){
        document.getElementById(jId).innerHTML = jView;
        }
         
        
        
