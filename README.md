# jFormz
<p>jFormz is a JavaScript Prototype Class for making forms.  jFormz allows you to generate HTML forms dynamically! These forms can then be used with JS, PHP or any other web language once the form is rendered!</p>


You can find documentation on this website.

http://jformz.com

 &lang;div id="formView" &rang; &lang;/div&rang;
        
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



