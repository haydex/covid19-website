/*



	" Reimplement the wheel to either learn, or make it better. "

    http://hayder.design/
    https://www.youtube.com/watch?v=QOlTGA3RE8I
    
    Product Name: COVID-19 MISINFO,
	Description: Tracking COVID-19 misinformation.
	Beneficiary: COSMOS
	
	Copyright © 1992 - 2020 HAYDER, All Rights Reserved.
	
	
	
*/



document.addEventListener("DOMContentLoaded", function() {

    // Report Scam

    class ReportScam {

        constructor() {

            this.reportScamButton = document.querySelector("button#reportScamButton");
            this.reportScamModal = document.querySelector("section#reportScamModal");
            this.closeButton = document.querySelector("section#reportScamModal button#closeButton");

            this.allForms = document.querySelectorAll("section#reportScamModal div#messageBox form");
            this.pickSourceForm = document.querySelector("section#reportScamModal div#messageBox form#pickSourceForm");
            this.socialMediaForm = document.querySelector("section#reportScamModal div#messageBox form#socialMediaForm");
            this.webOrVideoForm = document.querySelector("section#reportScamModal div#messageBox form#webOrVideoForm");
            this.phoneOrTextForm = document.querySelector("section#reportScamModal div#messageBox form#phoneOrTextForm");
            this.emailForm = document.querySelector("section#reportScamModal div#messageBox form#emailForm");

            this.socialMediaButton = document.querySelector("section#reportScamModal div#messageBox form#pickSourceForm div#options button#socialMediaButton");
            this.webOrVideoButton = document.querySelector("section#reportScamModal div#messageBox form#pickSourceForm div#options button#webOrVideoButton");
            this.phoneOrTextButton = document.querySelector("section#reportScamModal div#messageBox form#pickSourceForm div#options button#phoneOrTextButton");
            this.emailButton = document.querySelector("section#reportScamModal div#messageBox form#pickSourceForm div#options button#emailButton");

            this.displayedClass = "displayed";
            this.activeClass = "active";

            this.initialize();

        }

        initialize() {

            this.reportScamButton.addEventListener("click", this.reportScamButtonClickListener.bind(this));
            this.closeButton.addEventListener("click", this.closeButtonClickListener.bind(this));

            this.socialMediaButton.addEventListener("click", this.socialMediaButtonClickListener.bind(this));
            this.webOrVideoButton.addEventListener("click", this.webOrVideoButtonClickListener.bind(this));
            this.phoneOrTextButton.addEventListener("click", this.phoneOrTextButtonClickListener.bind(this));
            this.emailButton.addEventListener("click", this.emailButtonClickListener.bind(this));

        }

        reportScamButtonClickListener() {

            this.displayModal();
            this.activateForm(this.pickSourceForm);

        }

        closeButtonClickListener() {

            this.hideModal();
            this.deactivateAllForms();

        }

        displayModal() {

            this.reportScamModal.classList.add(this.displayedClass);

        }

        hideModal() {

            this.reportScamModal.classList.remove(this.displayedClass);

        }

        activateForm(form) {

            form.classList.add(this.activeClass);

        }

        deactivateAllForms() {

            for (let i = 0; i < this.allForms.length; i++) {
                this.allForms[i].classList.remove(this.activeClass);
            }

        }

        socialMediaButtonClickListener(event) {

            event.preventDefault();

            this.deactivateAllForms();
            this.activateForm(this.socialMediaForm);

        }

        webOrVideoButtonClickListener(event) {

            event.preventDefault();

            this.deactivateAllForms();
            this.activateForm(this.webOrVideoForm);

        }

        phoneOrTextButtonClickListener(event) {

            event.preventDefault();

            this.deactivateAllForms();
            this.activateForm(this.phoneOrTextForm);

        }

        emailButtonClickListener(event) {

            event.preventDefault();

            this.deactivateAllForms();
            this.activateForm(this.emailForm);

        }

    }

    let reportScam = new ReportScam();

});