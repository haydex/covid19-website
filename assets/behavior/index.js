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

            this.body = document.querySelector("body");
            this.reportScamButton = document.querySelector("button#reportScamButton");
            this.reportScamModal = document.querySelector("section#reportScamModal");
            this.closeButton = document.querySelector("section#reportScamModal button#closeButton");

            this.misinfo = document.querySelectorAll("ul.mainList li#misinfo.mainListItem p#title");
            this.moreInfoModal = document.querySelector("section#moreInfoModal");
            this.moreInfoMessage = document.querySelector("section#moreInfoModal div#messageBox div#messageContent");
            this.moreInfoCloseButton = document.querySelector("section#moreInfoModal div#messageBox button#closeButton");

            this.allForms = document.querySelectorAll("section#reportScamModal div#messageBox form");
            this.pickSourceForm = document.querySelector("section#reportScamModal div#messageBox form#pickSourceForm");
            this.socialMediaForm = document.querySelector("section#reportScamModal div#messageBox form#socialMediaForm");
            this.webOrVideoForm = document.querySelector("section#reportScamModal div#messageBox form#webOrVideoForm");
            this.phoneOrTextForm = document.querySelector("section#reportScamModal div#messageBox form#phoneOrTextForm");
            this.emailForm = document.querySelector("section#reportScamModal div#messageBox form#emailForm");
            this.mailForm = document.querySelector("section#reportScamModal div#messageBox form#mailForm");
            this.radioForm = document.querySelector("section#reportScamModal div#messageBox form#radioForm");

            this.socialMediaButton = document.querySelector("section#reportScamModal div#messageBox form#pickSourceForm div#options button#socialMediaButton");
            this.webOrVideoButton = document.querySelector("section#reportScamModal div#messageBox form#pickSourceForm div#options button#webOrVideoButton");
            this.phoneOrTextButton = document.querySelector("section#reportScamModal div#messageBox form#pickSourceForm div#options button#phoneOrTextButton");
            this.emailButton = document.querySelector("section#reportScamModal div#messageBox form#pickSourceForm div#options button#emailButton");
            this.mailButton = document.querySelector("section#reportScamModal div#messageBox form#pickSourceForm div#options button#mailButton");
            this.radioButton = document.querySelector("section#reportScamModal div#messageBox form#pickSourceForm div#options button#radioButton");

            this.displayedClass = "displayed";
            this.activeClass = "active";
            this.freezeDocumentScrollingClass = "freeze"

            this.initialize();

        }

        initialize() {

            this.reportScamButton.addEventListener("click", this.reportScamButtonClickListener.bind(this));
            this.closeButton.addEventListener("click", this.closeButtonClickListener.bind(this));

            this.socialMediaButton.addEventListener("click", this.socialMediaButtonClickListener.bind(this));
            this.webOrVideoButton.addEventListener("click", this.webOrVideoButtonClickListener.bind(this));
            this.phoneOrTextButton.addEventListener("click", this.phoneOrTextButtonClickListener.bind(this));
            this.emailButton.addEventListener("click", this.emailButtonClickListener.bind(this));
            this.mailButton.addEventListener("click", this.mailButtonClickListener.bind(this));
            this.radioButton.addEventListener("click", this.radioButtonClickListener.bind(this));

            for (let i = 0; i < this.misinfo.length; i++) {

                this.misinfo[i].addEventListener("click", this.misinfoClickListener.bind(this));

            }

            this.moreInfoCloseButton.addEventListener("click", this.moreInfoCloseButtonClickListener.bind(this));

        }

        reportScamButtonClickListener () {

            this.freezeDocumentScrolling();
            this.displayModal();
            this.activateForm(this.pickSourceForm);

        }

        closeButtonClickListener() {

            this.hideModal();
            this.deactivateAllForms();
            this.unfreezeDocumentScrolling();

        }

        misinfoClickListener() {

            this.freezeDocumentScrolling();
            this.moreInfoModal.classList.add(this.displayedClass);
            this.resetScrolling(this.moreInfoMessage);

        }

        moreInfoCloseButtonClickListener() {

            this.moreInfoModal.classList.remove(this.displayedClass);
            this.unfreezeDocumentScrolling();

        }

        displayModal() {

            this.reportScamModal.classList.add(this.displayedClass);

        }

        hideModal() {

            this.reportScamModal.classList.remove(this.displayedClass);

        }

        activateForm(form) {

            form.classList.add(this.activeClass);
            this.resetScrolling(form);

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

        mailButtonClickListener(event) {

            event.preventDefault();

            this.deactivateAllForms();
            this.activateForm(this.mailForm);

        }

        radioButtonClickListener(event) {

            event.preventDefault();

            this.deactivateAllForms();
            this.activateForm(this.radioForm);

        }

        freezeDocumentScrolling() {

            this.body.classList.add(this.freezeDocumentScrollingClass);

        }

        unfreezeDocumentScrolling() {

            this.body.classList.remove(this.freezeDocumentScrollingClass);

        }

        resetScrolling(object) {

            object.scrollTop = 0;

        }

    }

    let reportScam = new ReportScam();

});