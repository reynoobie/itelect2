 $(document).ready(function() {
    function setBorderClasses($element, isValidContent) {
        $element.removeClass('error-border'); 
        
        if (isValidContent) {
            $element.addClass('success-border');
        } else {
            $element.addClass('error-border');
        }
    }

    function handleRealTimeFeedback($inputElement) {
        const inputID = $inputElement.attr('id');
        const inputValue = $inputElement.val().trim();
        let isValidContent = true;

        
        if (inputValue === "") {
            isValidContent = false;
        } 
        
     
        else {
            switch (inputID) {
                case 'fullname':
                    
                    if (inputValue.split(/\s+/).length < 2) {
                        isValidContent = false;
                    }
                    break;
                case 'student-id':
                   
                    if (!/^\d{2}-\d+$/.test(inputValue)) {
                        isValidContent = false;
                    }
                    break;
                case 'age':
                 
                    if (isNaN(inputValue) || Number(inputValue) <= 0) {
                        isValidContent = false;
                    }
                    break;
                case 'phone':
                    
                    if (!/^\d{11}$/.test(inputValue)) {
                        isValidContent = false;
                    }
                    break;
            }
        }
        setBorderClasses($inputElement, isValidContent);
    }

    const inputSelectors = '#fullname, #student-id, #age, #address, #phone, #email, #birthday, #course';

    $(inputSelectors).on('keyup blur change', function() {
        const $this = $(this);
        const inputID = $this.attr('id');
        
        if (inputID !== 'male' && inputID !== 'female') {
            handleRealTimeFeedback($this);
        }
    });
});