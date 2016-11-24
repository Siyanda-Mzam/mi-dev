'use strict';

angular.module('mean.system').controller('IndexController', ['$scope', 'Global',
  function ($scope, Global) {
    $scope.global = Global;
    $scope.songs = [{
      'name': 'L.A Confidential',
      'text': 'Daystar Peterson, better known by his stage name Tory Lanez, is a Canadian hip hop recording artist. He received major recognition from the mixtape Lost Cause and the single, "Say It"',
      'author': 'Tory Lanez',
      'link': '',
      'image': '/meanStarter/assets/img/tory-lanez.jpg'
    }, {
      'name': 'Honest',
      'text': 'Nayvadius DeMun Wilburn, known professionally as Future, is an American hip hop recording artist. Born and raised in Atlanta, Georgia',
      'author': 'Future',
      'link': '',
      'image': '/meanStarter/assets/img/fire-rose.jpg'
    },
      {
      'name': 'Magic',
      'text': 'Nayvadius DeMun Wilburn, known professionally as Future, is an American hip hop recording artist. Born and raised in Atlanta, Georgia',
      'author': 'Future',
      'link': '',
      'image': '/meanStarter/assets/img/future-magic.jpg'
    }];
    $scope.tracks = {
      'gmap': {
        'name': 'Pluto',
        'text': 'Nayvadius DeMun Wilburn, known professionally as Future, is an American hip hop recording artist. Born and raised in Atlanta, Georgia',
        'author': 'Future',
        'link': '',
        'image': '/meanStarter/assets/img/future-pluto.jpg'
      },
      'upload': {
        'name': 'Panda',
        'text': 'Sidney Royel Selby III, better known by his stage name Desiigner, is an American hip hop recording artist from Brooklyn, New York.',
        'author': 'Desiigner',
        'link': '',
        'image': '/meanStarter/assets/img/life-of-desiigner.png'
      },
      'socket': {
        'name': 'Thank Me Later',
        'text': 'Aubrey Drake Graham, known simply as Drake, is a Canadian rapper, singer, songwriter, record producer, and actor. Drake initially gained recognition as an actor on the teen drama television series Degrassi: The Next Generation in the early 2000s',
        'author': 'Drake',
        'link': '',
        'image': '/meanStarter/assets/img/thank-me-later.jpg'
      }
    };

    $scope.categories = [{
      text: 'Full Songs',
      link: '',
      count: '5256'
    }, {
      text: 'Hooks',
      link: '',
      count: '3666'
    }, {
      text: 'Beats',
      link: '',
      count: '10134'
    }, {
      text: 'Acapellas',
      link: '',
      count: '592'
    }, {
      text: 'Writers',
      link: '',
      count: '781'
    }, {
      text: 'Samples',
      link: '',
      count: '154'
    }];

    $scope.infobar = [{
      link: 'https://facebook.com/groups/mean.io/',
      text: 'Informal support, news and just hanging out',
      icon: 'facebook'
    }, {
      link: 'https://github.com/linnovate/mean/',
      text: 'Issues, Support, Code discussions and PRs',
      icon: 'facebook'
    }, {
      link: 'https://gitter.im/linnovate/mean/',
      text: 'Support and Technical discussions',
      icon: 'gitter'
    }, {
      link: 'https://hangout.mean.io/',
      text: 'Video support, shared coding and to meet the people behind mean.io',
      icon: 'hangout'
    }];

    $scope.$watch(function () {
      for (var i = 0; i < $scope.sites.length; i += 1) {
        if ($scope.sites[i].active) {
          return $scope.sites[i];
        }
      }
    }, function (currentSlide, previousSlide) {
      if (currentSlide !== previousSlide) {
        console.log('currentSlide:', currentSlide);
      }
    });
  }
]);
