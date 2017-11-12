"use strict";
registerCSS('bootstrap.min', '../_catalogs/masterpage/lib/bootstrap.min.css');
registerCSS('global.css', '../_catalogs/masterpage/global.css');
registerCSS('font-awesome', 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
registerCSS('toastr.min', '../_catalogs/masterpage/lib/toastr.min.css');

angular.module('app', ['ngAnimate', 'ui.bootstrap', 'sp.service']);

jQuery(document).ready(function () {

    jQuery(".ms-cui-TabRowRight").prepend('<i id="settings-slider" width="20" height="20" class="fa fa-cog"></i>')

    //INSERT ALL CODE HERE:
    jQuery("#settings-slider").on('click', function () {
        jQuery("#suiteBarTop").slideToggle();
    });

    if (jQuery(".ms-dialog").length > 0) { //Don't add bootstrap in dialog boxes:
        removeCSS('bootstrap.min');
        removeCSS('global.css');
    }

    // Adding chevron class to the left navigation:
    // jQuery("#sideNavBox li.static>ul").prev().addClass("chevron-right");

    jQuery("#sideNavBox a.dynamic-children").addClass("chevron-right");


    // Units filter
    var units =
        "<option value='/East'> East Division </option>" +
        "<option value='/North'>North Division </option>" +
        "<option value='/West'> West Division </option>" +
        "<option value='/AirSupport'> Air Support Unit </option>" +
        "<option value='/Auxiliary'> Auxiliary Unit </option>" +
        "<option value='/Canine'> Canine Unit </option>";

    jQuery("#sideNavBox").append("<select class='select-division btn btn-default'>" + units + "</select>");
    jQuery("#sideNavBox").append("<button type='button' class='select-division-button btn btn-primary'>View</button>");

    jQuery(".select-division-button").on('click', function () {
        var val = jQuery(".select-division").val();
        window.location.href = val;
    });

    if (jQuery("#_wikiPageMode").val() === "Edit") {
        jQuery("html").addClass('edit');
    }

    jQuery("#DeltaSiteLogo a").attr('href', '/');
    setTimeout(function () {
        jQuery("#DeltaSiteLogo a").attr('href', '/');
        // console.log(jQuery("#DeltaSiteLogo a").attr('href'));
    }, 100);

    //Left navigation classes
    jQuery("#sideNavBox #zz13_RootAspMenu>li>.menu-item:contains('Project')").addClass('icon-project')
    jQuery("#sideNavBox #zz13_RootAspMenu>li>.menu-item:contains('Crime Management')").addClass('icon-crime')
    jQuery("#sideNavBox #zz13_RootAspMenu>li>.menu-item:contains('Knowledge Management')").addClass('icon-knowledge')

    jQuery("#sideNavBox #zz13_RootAspMenu>li>.menu-item:contains('Versaterm')").addClass('icon-versaterm')
    jQuery("#sideNavBox #zz13_RootAspMenu>li>.menu-item:contains('Indicators and Statistics')").addClass('icon-indicator')
    jQuery("#sideNavBox #zz13_RootAspMenu>li>.menu-item:contains('Organization')").addClass('icon-organization')
    jQuery("#sideNavBox #zz13_RootAspMenu>li>.menu-item:contains('Videos')").addClass('icon-videos')
    

    

    jQuery("#sideNavBox #zz13_RootAspMenu>li>.menu-item:contains('Business Management')").addClass('icon-business')
    jQuery("#sideNavBox #zz13_RootAspMenu>li>.menu-item:contains('Operational Support')").addClass('icon-operation')
    jQuery("#sideNavBox #zz13_RootAspMenu>li>.menu-item:contains('Employee Services')").addClass('icon-employee')
    jQuery("#sideNavBox #zz13_RootAspMenu>li>.menu-item:contains('Photo Gallery')").addClass('icon-photo')
    jQuery("#sideNavBox #zz13_RootAspMenu>li>.menu-item:contains('Become a member')").addClass('icon-member')
    jQuery("#sideNavBox #zz13_RootAspMenu>li>.menu-item:contains('FAQ')").addClass('icon-faq')
    jQuery("#sideNavBox #zz13_RootAspMenu>li>.menu-item:contains('Library')").addClass('icon-library')
    jQuery("#sideNavBox #zz13_RootAspMenu>li>.menu-item:contains('Documents')").addClass('icon-documents')
    jQuery("#sideNavBox #zz13_RootAspMenu>li>.menu-item:contains('Software Applications')").addClass('icon-software')

});


function registerCSS(cssId, cssUrl) {
    if (!document.getElementById(cssId)) {
        var head = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.id = cssId;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = cssUrl;
        link.media = 'all';
        head.appendChild(link);
    }
}


function removeCSS(cssId) {
    document.getElementById(cssId).remove();
}


toastr.options = {
    positionClass: "toast-top-center",
    "showDuration": "30000"
}


