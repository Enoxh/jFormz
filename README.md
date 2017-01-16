# jFormz
<p>jFormz is a JavaScript Prototype Class for making forms.  jFormz allows you to generate HTML forms dynamically! These forms can then be used with JS, PHP or any other web language!</p>



<div class="container">

<h2>jFormz Documentation</h2>

<p>jFormz is written as a simple JavaScript prototype class.</p>
<p>The idea is to make it easier to generate and inject HTML forms using javaScript.</p>
           <p><strong>Installation: Include a script tag with the src linking to a copy of jFormz.js </strong></p> 
            <p>Then instantiate an instance of the jFormz class.</p>
            <pre>
            
            &lang;script src='jFormz.js'&rang;&lang;/script&rang;
            var jf = new Jformz()
            </pre>
            <p>Now you can call any of the jFormz methods as shown below.</p>
            <p>While JavaScript is very forgiving about not passing arguments. It's best to always pass the total number of arguments the method expects and either use an empty string '' or jf.empty for tag attributes you don't need. </p>
            <p>Build a form.</p>
            <pre>
        &lang;script src='jFormz.js'&rang;&lang;/script&rang;
        
        &lang;script&rang;
        //INSTANTIATE
        var jf = new Jformz();
        
        //BUILD A FORM
        var view  = '';
        var e = jf.empty;    
        view += jf.openForm(e,e,e,jf.dClass,e);
        view += jf.formLabel('Name','label'); 
        view += jf.inputText('text','test',jf.dClass,'testa','Placeholder',e);
        view += jf.br();
        view += jf.formLabel('Message','label'); 
        view += jf.textArea('test',jf.dClass,'test','test text');
        view += jf.br();
        view += jf.formLabel('Options','label'); 
        view += jf.selectList(e,jf.dClass,e,[['1', 'Option 1'],['2', 'Option 2']]);
        view += jf.br();
        view += jf.submitBtn(e,e,jf.priBtn,'Save');
        view += jf.closeForm();
        

        //SHOW THE FORM
        jf.showView('formView', view);
        
        &lang;/script&rang;
            </pre>
            
            
            
            
            
            
            
            <hr/>
            <h2>jFormz Methods</h2>
        <div class="panel panel-default">
        <div class="panel-heading"><strong>OPENING FORM TAG:</strong> openForm(jAction, jMethod, jId, jClass, jName)
        <span class="badge">5 Args</span></div>
        <div class="panel-body">
        <p>Takes in 5 arguments, returns an opening form tag.</p>
        <pre> 
        jAction: The form action
        jMethod: The form method POST or GET
        jId: The form id
        jClass: The form class
        jName: The form name
        
        jf.openForm(jAction, jMethod, jId, jClass, jName);
        </pre>


        </div>
        </div>     
        <!--        -->

        <div class="panel panel-default">
        <div class="panel-heading"><strong>CLOSING FORM TAG:</strong> closeForm() <span class="badge">0 Args</span></div>
        <div class="panel-body">
        <p>Takes in nothing returns a closing form tag.</p>
            <p>jf.closeForm();</p>
        </div>
        </div>       


        <!--        -->

        <div class="panel panel-default">
            <div class="panel-heading"><strong>BREAK TAG: </strong> br() <span class="badge"> 0 Args</span></div>
        <div class="panel-body">
        <p>Takes in nothing returns a break (br) tag.</p>
            <p>jf.br();</p>
        </div>
        </div>          



        <!--        -->

        <div class="panel panel-default">
            <div class="panel-heading"><strong>LABEL: </strong>formLabel(jText, jClass)<span class="badge">2 Args</span> </div>
        <div class="panel-body">

        <p>Takes in 2 arguments, returns a form label.</p>
        <pre> 
        jText: The label text
        jClass: The label class
        
        jf.formLabel(jText, jClass);
        </pre>

        </div>
        </div>    
            
            
              <!--        -->

        <div class="panel panel-default">
            <div class="panel-heading"><strong>GENERIC INPUT:</strong> genInput(jId,jClass,jName,jPh,jVal,jRequire) <span class="badge">6 Args</span> </div>
        <div class="panel-body">
        <p>Takes in 6 arguments, returns a text input.</p>

        <pre> 
        jType: Input Type
        jId: Input Id
        jClass: Input Class
        jName: Input Name
        jPh: Input Placeholder
        jVal: Input Value
        jRequire: Input Required
        
        jf.genInput(jId,jClass,jName,jPh,jVal,jRequire)
        </pre>
        </div>
        </div>  
                  
            

        <!--        -->

        <div class="panel panel-default">
            <div class="panel-heading"><strong>TEXT INPUT:</strong> textInput(jId,jClass,jName,jPh,jVal,jRequire) <span class="badge">6 Args</span> </div>
        <div class="panel-body">
        <p>Takes in 6 arguments, returns a text input.</p>

        <pre> 
        jId: Input Id
        jClass: Input Class
        jName: Input Name
        jPh: Input Placeholder
        jVal: Input Value
        jRequire: Input Required
        
        jf.textInput(jId,jClass,jName,jPh,jVal,jRequire);
        </pre>
        </div>
        </div>  
            
            
            
            
            <!--        -->

        <div class="panel panel-default">
            <div class="panel-heading"><strong>DATE INPUT:</strong> dateInput(jId,jClass,jName,jMin,jMax,jRequire) <span class="badge">6 Args</span> </div>
        <div class="panel-body">
        <p>Takes in 6 arguments, returns a date input.</p>

        <pre> 
        jId: Input Id
        jClass: Input Class
        jName: Input Name
        jMin: expects date string ex: min="1979-12-31"
        jMax: expects date string ex: min="1979-12-31"
        jRequire: Input Required
        
        jf.dateInput(jId,jClass,jName,jMin,jMax,jRequire);
        </pre>
        </div>
        </div>  
                    
            
             <!--        -->

        <div class="panel panel-default">
            <div class="panel-heading"><strong>COLOR INPUT:</strong> colorInput(jId,jClass,jName,jRequire) <span class="badge">4 Args</span> </div>
        <div class="panel-body">
        <p>Takes in 4 arguments, returns a color input.</p>

        <pre> 
        jId: Input Id
        jClass: Input Class
        jName: Input Name
        jRequire: Input Required
        
        jf.colorInput(jId,jClass,jName,jRequire);
        </pre>
        </div>
        </div>             
            
          
             <!--        -->

        <div class="panel panel-default">
            <div class="panel-heading"><strong>MONTH INPUT:</strong> monthInput(jId,jClass,jName,jRequire) <span class="badge">4 Args</span> </div>
        <div class="panel-body">
        <p>Takes in 4 arguments, returns a month input.</p>

        <pre> 
        jId: Input Id
        jClass: Input Class
        jName: Input Name
        jRequire: Input Required
        
        jf.monthInput(jId,jClass,jName,jRequire);
        </pre>
        </div>
        </div>              
 

             <!--        -->

        <div class="panel panel-default">
            <div class="panel-heading"><strong>WEEK INPUT:</strong> weekInput(jId,jClass,jName,jRequire) <span class="badge">4 Args</span> </div>
        <div class="panel-body">
        <p>Takes in 4 arguments, returns a month input.</p>

        <pre> 
        jId: Input Id
        jClass: Input Class
        jName: Input Name
        jRequire: Input Required
        
        jf.weekInput(jId,jClass,jName,jRequire);
        </pre>
        </div>
        </div>  


           
                 
            <!--        -->

        <div class="panel panel-default">
            <div class="panel-heading"><strong>RANGE INPUT:</strong> rangeInput(jId,jClass,jName,jMin,jMax,jRequire) <span class="badge">6 Args</span> </div>
        <div class="panel-body">
        <p>Takes in 6 arguments, returns a range input.</p>

        <pre> 
        jId: Input Id
        jClass: Input Class
        jName: Input Name
        jMin: expects date string ex: min="1979-12-31"
        jMax: expects date string ex: min="1979-12-31"
        jRequire: Input Required
        
        jf.rangeInput(jId,jClass,jName,jMin,jMax,jRequire);
        </pre>
        </div>
        </div>        
            
            <!--        -->

        <div class="panel panel-default">
            <div class="panel-heading"><strong>TIME INPUT:</strong> timeInput(jId,jClass,jName,jRequire) <span class="badge">4 Args</span> </div>
        <div class="panel-body">
        <p>Takes in 4 arguments, returns a time input.</p>

        <pre> 
        jId: Input Id
        jClass: Input Class
        jName: Input Name
        jRequire: Input Required
        
        jf.timeInput(jId,jClass,jName,jRequire)
        </pre>
        </div>
        </div>                 
            
            
            
            
            
            
            


        <!--        -->

        <div class="panel panel-default">
            <div class="panel-heading"><strong>NUMBER INPUT:</strong> numInput(jId,jClass,jName,jMin,jMax,jStep,jRequire) <span class="badge">7 Args</span> </div>
        <div class="panel-body">
        <p>Takes in 7 arguments, returns a number input.</p>

        <pre> 
        jId: Input Id
        jClass: Input Class
        jName: Input Name
        jMin: Input Min
        jMax: Input Max
        jStep: Input Step
        jRequire: Input Required
        
        jf.numInput(jId,jClass,jName,jMin,jMax,jStep,jRequire);
        </pre>
        </div>
        </div>       




        <div class="panel panel-default">
            <div class="panel-heading"><strong>RADIO BUTTON: </strong>radioInput(jId,jClass,jName,jVal,jChkd,jRequire) <span class="badge">6 Args</span> </div>
        <div class="panel-body">
        <p>Takes in 6 arguments, returns a radio button.</p>

        <pre> 
        jId: Input Id
        jClass: Input Class
        jName: Input Name
        jMVal: Input Value
        jChkd: Input Checked
        jRequire: Input Required
        
        jf.radioInput(jId,jClass,jName,jVal,jChkd,jRequire);
        </pre>
        </div>
        </div>           





        <div class="panel panel-default">
            <div class="panel-heading"><strong>CHECKBOX: </strong>checkBoxInput(jId,jClass,jName,jVal,jChkd,jRequire) <span class="badge">6 Args</span> </div>
        <div class="panel-body">
        <p>Takes in 6 arguments, returns a checkbox.</p>

        <pre> 
        jId: Input Id
        jClass: Input Class
        jName: Input Name
        jMVal: Input Value
        jChkd: Input Checked
        jRequire: Input Required
        
        jf.checkBoxInput(jId,jClass,jName,jVal,jChkd,jRequire);
        </pre>
        </div>
        </div>             




        <div class="panel panel-default">
            <div class="panel-heading"><strong>TEXTAREA: </strong>textArea(jId,jClass,jName,jHtchml,jRequire) <span class="badge">5 Args</span> </div>
        <div class="panel-body">
        <p>Takes in 5 arguments, returns a textarea tag.</p>

        <pre> 
        jId: Input Id
        jClass: Input Class
        jName: Input Name
        jHtchml: Inner HTML
        jRequire: Input Required
        
        jf.textArea(jId,jClass,jName,jHtchml,jRequire)
        </pre>
        </div>
        </div>          




        <div class="panel panel-default">
        <div class="panel-heading"><strong>SELECT LIST: </strong>selectList(jId,jClass,jName,jVals,jRequire) <span class="badge">5 Args</span> </div>
        <div class="panel-body">
        <p>Takes in 5 arguments, returns a select list.</p>

        <pre> 
        jId: Input Id
        jClass: Input Class
        jName: Input Name
        jVals: Array of arrays. [['value','text'],['value','text']]
        jRequire: Input Required
        
        jf.selectList(jId,jClass,jName,jVals,jRequire);
        </pre>
        </div>
        </div>   



        <div class="panel panel-default">
        <div class="panel-heading"><strong>SUBMIT BUTTON: </strong> submitBtn(jName,jId,jClass,jVal) <span class="badge"> 4 Args</span> </div>
        <div class="panel-body">
        <p>Takes in 4 arguments, returns a submit button.</p>

        <pre> 
        jId: Input Id
        jClass: Input Class
        jName: Input Name
        jVal: Button Text
     
        jf.submitBtn(jName,jId,jClass,jVal);
        </pre>
        </div>
        </div>   

<hr/>
<h2>HTML Element Methods</h2>

        <div class="panel panel-default">
        <div class="panel-heading"><strong>Get Element By Id </strong> getElem(jId) <span class="badge"> 1 Arg</span> </div>
        <div class="panel-body">
        <p>Takes in 1 argument, returns the element.</p>

        <pre> 
        jId: Element Id
        
        jf.getElem(jId);
        </pre>
        </div>
        </div>   


           <div class="panel panel-default">
        <div class="panel-heading"><strong>Get Elements By Class Name </strong> getByClass(jClass) <span class="badge"> 1 Arg</span> </div>
        <div class="panel-body">
        <p>Takes in 1 argument, returns an array of elements.</p>

        <pre> 
        jId: Element Id
        
        jf.getByClass(jClass);
        
        </pre>
        </div>
        </div>   
         
            
            
            
            <div class="panel panel-default">
        <div class="panel-heading"><strong>Get Elements By Tag Name </strong> getByTag(jTag) <span class="badge"> 1 Arg</span> </div>
        <div class="panel-body">
        <p>Takes in 1 argument, returns an array of elements.</p>

        <pre> 
        jId: Element Id
        
       jf.getByTag(jTag);
        
        </pre>
        </div>
        </div>   
        
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            

<hr/>
<h2>Show View Method</h2>
            
                  <div class="panel panel-default">
        <div class="panel-heading"><strong>Show View </strong> showView(jId,jView) <span class="badge"> 2 Args</span> </div>
        <div class="panel-body">
        <p>Takes in 2 arguments, injects view object into inner HTML of element with id.</p>

        <pre> 
        jId: Element Id to inject into
        jView: HTML to show.
        
        jf.showView(jId,jView);
        
        </pre>
        </div>
        </div>   
              
            
            
        </div>


