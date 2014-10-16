/**
 * Populate DB with sample data.
 */

'use strict';

var Post = require('../app/models/post.js');

Post.find({}).remove(function() {
    Post.create({
        title: "This is an example post #1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec magna velit, volutpat a ullamcorper non, mattis ut libero. Maecenas id dolor leo. Nulla at arcu sed ipsum volutpat pharetra in in velit. Vestibulum a volutpat ante. Curabitur posuere felis et diam dictum congue. Maecenas aliquam, lacus fringilla scelerisque mollis, purus odio ultricies tortor, sit amet dignissim mi tellus eleifend urna. Sed vehicula tempor nisi sed vulputate.",
        author: "Oskar",
        tags: ["car", "food"],
        body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec magna velit, volutpat a ullamcorper non, mattis ut libero. Maecenas id dolor leo. Nulla at arcu sed ipsum volutpat pharetra in in velit. Vestibulum a volutpat ante. Curabitur posuere felis et diam dictum congue. Maecenas aliquam, lacus fringilla scelerisque mollis, purus odio ultricies tortor, sit amet dignissim mi tellus eleifend urna. Sed vehicula tempor nisi sed vulputate.</p>' +
              '<p>Donec nec elit at sem sagittis dictum non vitae <a href="#">ipsum</a>. Maecenas fringilla id magna vitae scelerisque. Aliquam erat volutpat. Ut finibus massa aliquam, blandit tellus vel, ultricies erat. Mauris nisi augue, varius ut arcu sit amet, sagittis tristique leo. Donec ac elementum urna. Sed placerat, mauris eu blandit vestibulum, lacus mi semper enim, nec sodales nisi orci non dolor. Duis a libero iaculis magna tincidunt varius. Cras enim nisi, consequat nec erat ut, hendrerit cursus odio. Integer congue, tellus sit amet auctor congue, sem nibh pharetra elit, in rutrum felis eros quis ipsum.</p>' +
              '<p>Sed odio nibh, interdum vitae turpis vel, rhoncus dignissim sapien. Nunc quis urna odio. In in molestie augue. Vivamus vel tortor eget turpis mattis ultrices. Cras vehicula, felis ut ullamcorper ultricies, orci nisi fermentum lacus, nec rhoncus felis arcu vel tellus. Nulla ornare nisi nec diam congue posuere. In rutrum aliquet efficitur. Fusce venenatis elementum lectus.</p>' +
              '<h2>Going on...</h2>' +
              '<p>Vivamus posuere facilisis <a href="#">suscipit</a>. Nunc volutpat purus et dolor tristique, eget scelerisque ipsum tempor. Nullam consectetur nunc eu rutrum lacinia. Donec quis neque sed ipsum posuere scelerisque placerat porttitor lacus. Nullam vel nunc auctor risus fringilla vehicula ut vel metus. Donec placerat justo eget quam aliquet tristique. Aliquam erat volutpat. Vivamus in sem a leo posuere laoreet. Praesent finibus massa felis, sed pellentesque ligula finibus vitae. Donec non diam ac felis sodales euismod vitae non nisi. Integer a faucibus leo, eget pretium mi. Curabitur malesuada, orci tristique fringilla scelerisque, augue nulla vulputate purus, at imperdiet eros augue non enim. Donec consequat sagittis metus. Nam auctor, dui eget convallis porta, quam ex congue nunc, id accumsan felis odio sit amet lorem. Ut dapibus velit tellus, a sagittis nunc tincidunt sed.</p>' +
              '<img src="http://lorempixel.com/640/301/abstract" />' +
              '<p>Sed <a href="#">placerat</a> ante nisl. Aenean efficitur metus eu sem ornare cursus. Cras sodales commodo ipsum, et dignissim nulla efficitur vel. Nam sed laoreet urna. Nulla id sollicitudin dolor. Cras molestie blandit orci, non consequat velit ultricies sed. Maecenas vitae lectus sit amet est ultrices venenatis varius quis quam. Fusce lectus enim, efficitur tempor ipsum quis, auctor pharetra est. Nam ac tristique arcu, vitae elementum orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam erat volutpat. Phasellus vulputate dolor iaculis, imperdiet tellus at, vehicula arcu.</p>' +
              '<p>Donec nec elit at sem sagittis dictum non vitae ipsum. Maecenas fringilla id magna vitae scelerisque. Aliquam erat volutpat. Ut finibus massa aliquam, blandit tellus vel, ultricies erat. Mauris nisi augue, varius ut arcu sit amet, sagittis tristique leo. Donec ac elementum urna. Sed placerat, mauris eu blandit vestibulum, lacus mi semper enim, nec sodales nisi orci non dolor. Duis a libero iaculis magna tincidunt varius. Cras enim nisi, consequat nec erat ut, hendrerit cursus odio. Integer congue, tellus sit amet auctor congue, sem nibh pharetra elit, in rutrum felis eros quis ipsum.</p>',
        image: "http://lorempixel.com/640/300/abstract"
    },{
        title: "Some example article",
        description: "Donec nec elit at sem sagittis dictum non vitae ipsum. Maecenas fringilla id magna vitae scelerisque. Aliquam erat volutpat. Ut finibus massa aliquam, blandit tellus vel, ultricies erat.",
        author: "Bob the cat",
        tags: ["car", "tricks"],
        body: "<p>Duis euismod mi felis, nec venenatis ante hendrerit et. Nam pretium nibh ac dolor interdum, quis feugiat libero rutrum. Sed pellentesque urna nulla, et accumsan tellus gravida a. Donec facilisis ornare erat eget viverra. Morbi efficitur tincidunt purus rhoncus hendrerit. Suspendisse congue, lorem dignissim pulvinar elementum, sem odio semper dui, elementum dignissim justo sapien et dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam justo arcu, dictum ut pellentesque et, laoreet vitae risus. Aenean vel tristique tellus, nec porta libero.</p>",
        image: "http://lorempixel.com/641/300/abstract"
    },{
        title: "Some example article #3",
        description: "Donec nec elit at sem sagittis dictum non vitae ipsum. Maecenas fringilla id magna vitae scelerisque. Aliquam erat volutpat. Ut finibus massa aliquam, blandit tellus vel, ultricies erat.",
        author: "Bob the cat",
        tags: ["car", "tricks"],
        body: "<p>Duis euismod mi felis, nec venenatis ante hendrerit et. Nam pretium nibh ac dolor interdum, quis feugiat libero rutrum. Sed pellentesque urna nulla, et accumsan tellus gravida a. Donec facilisis ornare erat eget viverra. Morbi efficitur tincidunt purus rhoncus hendrerit. Suspendisse congue, lorem dignissim pulvinar elementum, sem odio semper dui, elementum dignissim justo sapien et dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam justo arcu, dictum ut pellentesque et, laoreet vitae risus. Aenean vel tristique tellus, nec porta libero.</p>",
        image: "http://lorempixel.com/641/299/abstract"
    },{
        title: "Some example article #4",
        description: "Donec nec elit at sem sagittis dictum non vitae ipsum. Maecenas fringilla id.",
        author: "Bob the cat",
        tags: ["car", "tricks"],
        body: "<p>Duis euismod mi felis, nec venenatis ante hendrerit et. Nam pretium nibh ac dolor interdum, quis feugiat libero rutrum. Sed pellentesque urna nulla, et accumsan tellus gravida a. Donec facilisis ornare erat eget viverra. Morbi efficitur tincidunt purus rhoncus hendrerit. Suspendisse congue, lorem dignissim pulvinar elementum, sem odio semper dui, elementum dignissim justo sapien et dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam justo arcu, dictum ut pellentesque et, laoreet vitae risus. Aenean vel tristique tellus, nec porta libero.</p>",
        image: "http://lorempixel.com/639/301/abstract"
    },{
        title: "This is yet another post",
        subtitle: "Mauris nisi augue, varius ut arcu sit amet, sagittis tristique leo. Donec ac elementum urna. Sed placerat, mauris eu blandit vestibulum, lacus mi semper enim, nec sodales nisi orci non dolor. Duis a libero iaculis magna tincidunt varius. Cras enim nisi, consequat nec erat ut, hendrerit cursus odio.",
        author: "Nobody",
        tags: [],
        body: "<p>Maecenas mi metus, vulputate in faucibus vitae, congue eu sem. Nam iaculis, nibh ac tristique pretium, purus eros eleifend dui, nec bibendum ligula turpis in risus. Aenean eget ornare nisl, in efficitur metus. Duis elementum in justo a feugiat. Duis purus risus, commodo nec vulputate id, ornare in nunc. Donec sit amet quam porta, commodo sem eu, ornare mi. Proin porttitor tincidunt mi, id lobortis lorem tempor eget. Cras neque purus, feugiat at elit vitae, tincidunt faucibus quam. Aenean laoreet ante eu lectus auctor hendrerit. Aliquam mattis lacus mauris, nec laoreet lectus malesuada eu. In hac habitasse platea dictumst. Aliquam sodales, felis non aliquam maximus, mauris dui dignissim urna, sed dictum nibh felis eu ipsum. Etiam quam sem, maximus non convallis id, consectetur sit amet augue. Mauris rhoncus ex quis dolor auctor, sit amet mollis ipsum vestibulum.</p>",
        image: "http://lorempixel.com/642/300/abstract"
    });
});