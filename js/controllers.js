'use strict';

/* Controllers */

angular.module('my.portfolio.controller', [])
  .controller('Controller', function($scope) {
    
    /* default */
    $scope.portfolioDetails = true;
    $scope.folderTitle = 'Hide Portfolio Details';
    $scope.folderImg = 'img/etc/folderTop.png';
    $scope.folderBottomImg = 'img/etc/folderBottom.png';
    $scope.desktopFrameSrc = 'desktop.png';
    $scope.mobileFrameSrc = 'mobile-dark.png';    
    
    /* toggle details */
    $scope.togglePortfolioDetails = function(){
      if ($scope.portfolioDetails) {
        $scope.portfolioDetails = false;
        $scope.folderTitle = 'Show Portfolio Details';
        $scope.folderImg = 'img/etc/folder2.png';
      } else {
        $scope.portfolioDetails = true;
        $scope.folderTitle = 'Hide Portfolio Details';
        $scope.folderImg = 'img/etc/folderTop.png';
      }
    },
    
    /* web portfolio data */    
    $scope.blocks = [
      {
         name: 'Bandshell Booking',
         imgSrc: 'bandshell.jpg',
         info: 'A show booking and promotions agency startup website with responsive design.',
         infoSpan: 'Additional [heroku-rails-postgresql] version link on github > rails branch.',
         infoLangs: 'php, laravel, mysql, javascript',
         href: 'http://bandshell.ly/',
         gitLink: 'https://github.com/ievgenborodin/bandshell',
         color: "#0101ff",
         mobilePhoto: 'bandshell/2.gif',  
         desktopPhoto: 'bandshell/1.jpg'
      },
			{
         name: 'BackGrid',
         imgSrc: 'backgrid.jpg',
         info: 'Scalable background pattern tool. Helps to draw a grid / tile images.',
         infoLangs: 'javascript, php',
         href: 'apps/backgrid',
         gitLink: 'https://github.com/ievgenborodin/backgrid',
         color: "#5e2400",
         mobilePhoto: 'grid/2.gif',
         desktopPhoto: 'grid/1.jpg'
      },
      {
         name: 'Lines',
         imgSrc: 'lines.jpg',
         info: 'Web application. Structured as a mini platform for implementation and testing geometric animation.',
         infoLangs: 'html5-canvas, javascript, jquery, requirejs',
         href: 'apps/lines',
         gitLink: 'https://github.com/ievgenborodin/lines',
         color: "#211b80",
         mobilePhoto: 'lines/2.gif',
         desktopPhoto: 'lines/1.jpg'
      },
        {
         name: 'Tri',
         imgSrc: 'tri.jpg',
         info: 'Image depth generator. Searches through the image for outlines, based on found colors builds depth. Use sample images or load your pictures. Supports mouse and touch events.',
         infoLangs: 'html5-canvas, javascript, php',
         href: 'apps/tri',
         gitLink: 'https://github.com/ievgenborodin/tri',
         color: "#299e56",
         mobilePhoto: 'tri/2.gif',
         desktopPhoto: 'tri/1.jpg'
      },
		{
         name: 'Color Picker',
         imgSrc: 'color.jpg',
         info: 'Select color using hue bar and saturation-value field or by entering hash code. Bottom block gives ten random colors. Supports mouse and touch events.',
         infoLangs: 'javascript',
         href: 'apps/colorpicker',
         gitLink: 'https://github.com/ievgenborodin/color-picker',
         color: "#ac22cc",
         mobilePhoto: 'picker/2.gif',
         desktopPhoto: 'picker/1.jpg'
      },
      {
         name: 'Raccoon',
         imgSrc: 'raccoon.jpg',
         info: '2d arcade game with responsive design and keyboard controls for laptop / desktop computers and virtual joystick for mobile devices.',
         infoLangs: 'html5-canvas, javascript',
         href: 'apps/raccoon',
         gitLink: 'https://github.com/ievgenborodin/raccoon',
         color: "#158e09",
         mobilePhoto: 'raccoon/2.gif',
         desktopPhoto: 'raccoon/1.jpg'  
      },
      {
         name: 'Gems',
         imgSrc: 'gems.jpg',
         info: 'Out of curiosity. Implementation of matrix for Diamonds. Supports touch events and mouse.',
         infoLangs: 'html5-canvas, javascript',
         href: 'apps/gems',
         gitLink: 'https://github.com/ievgenborodin/gems',
         color: "#ff6a00",
         mobilePhoto: 'gems/2.jpg',
         desktopPhoto: 'gems/1.jpg'
      },  
      {
         name: 'Dro',
         imgSrc: 'dro.jpg',
         info: 'The idea is to learn how to draw with the help of built-in tools. Filter that takes away extra elements out of images. Custom grid splits photo into sections. Colors schemas.',
         infoLangs: 'html5-canvas, javascript',
         href: 'apps/dro',
         gitLink: 'https://github.com/ievgenborodin/dro',
         color: "#4a5077",
         mobilePhoto: 'dro/2.gif',
         desktopPhoto: 'dro/1.jpg'
      },
      {
         name: 'Live Brush',
         imgSrc: 'brush.jpg',
         info: 'Browser oriented hybrid graphical app. Combines raster and object based drawing. Supports mouse and touch events.',
         infoLangs: 'html5-canvas, javascript, php',
         href: 'apps/livebrush',
         gitLink: 'https://github.com/ievgenborodin/live-brush',
         color: "#098e60",
         mobilePhoto: 'brush/2.gif',
         desktopPhoto: 'brush/1.jpg'
      },    
      {
         name: 'Monk',
         imgSrc: 'monk-cover.jpg',
         info: 'Base for 2d with side view arcade game. Supports keyboard and touches.',
         infoLangs: 'html-canvas, javascript',
         href: 'apps/monk',
         gitLink: 'https://github.com/ievgenborodin/monk',
         color: "#ad490c",
         desktopPhoto: 'monk/1.jpg'
      }/*,
      {
         name: 'Functions',
         imgSrc: 'functions.jpg',
         info: 'Functions and their graphs.',
         infoLangs: 'html-canvas, javascript',
         href: 'apps/functions',
         gitLink: 'https://github.com/ievgenborodin/function',
         color: "#8e0000",
         desktopPhoto: 'functions/1.jpg'
      }*/
    ];
    
    /* footer my contacts */
    $scope.myLinks = [
      {
        title: "send me an email",
        href: "mailto:ievgenborodin@gmail.com",
        imgSrc: "email.png"
      },
      {
        title: "me on facebook",
        href: "https://www.facebook.com/public/Ievgen-Borodin",
        imgSrc: "facebook.png"
      },
      {
        title: "me on github",
        href: "https://github.com/ievgenborodin",
        imgSrc: "github.png"
      },
      {
        title: "me on linkedin",
        href: "https://www.linkedin.com/in/ievgen-borodin-441b5478",
        imgSrc: "linkedin.png"
      }
    ];
    
  });
