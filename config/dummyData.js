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
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque pharetra sagittis. Curabitur lobortis vestibulum arcu, vitae malesuada ipsum rhoncus nec. Curabitur vulputate commodo tincidunt. Nam condimentum nisi in tempus mattis. Curabitur ac egestas arcu. In hac habitasse platea dictumst. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc vitae ullamcorper purus. Nulla a nulla sollicitudin diam scelerisque imperdiet. Curabitur luctus mollis venenatis. Sed scelerisque tincidunt sem, id commodo elit ultrices at. Pellentesque iaculis augue dignissim, lobortis nibh quis, sagittis tortor. Pellentesque ac neque sapien.",
        image: "http://lorempixel.com/640/300/abstract"
    },{
        title: "Some example article",
        description: "Donec nec elit at sem sagittis dictum non vitae ipsum. Maecenas fringilla id magna vitae scelerisque. Aliquam erat volutpat. Ut finibus massa aliquam, blandit tellus vel, ultricies erat.",
        author: "Bob the cat",
        tags: ["car", "tricks"],
        body: "Duis euismod mi felis, nec venenatis ante hendrerit et. Nam pretium nibh ac dolor interdum, quis feugiat libero rutrum. Sed pellentesque urna nulla, et accumsan tellus gravida a. Donec facilisis ornare erat eget viverra. Morbi efficitur tincidunt purus rhoncus hendrerit. Suspendisse congue, lorem dignissim pulvinar elementum, sem odio semper dui, elementum dignissim justo sapien et dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam justo arcu, dictum ut pellentesque et, laoreet vitae risus. Aenean vel tristique tellus, nec porta libero.",
        image: "http://lorempixel.com/641/300/abstract"
    },{
        title: "This is yet another post",
        subtitle: "Mauris nisi augue, varius ut arcu sit amet, sagittis tristique leo. Donec ac elementum urna. Sed placerat, mauris eu blandit vestibulum, lacus mi semper enim, nec sodales nisi orci non dolor. Duis a libero iaculis magna tincidunt varius. Cras enim nisi, consequat nec erat ut, hendrerit cursus odio.",
        author: "Nobody",
        tags: [],
        body: "Maecenas mi metus, vulputate in faucibus vitae, congue eu sem. Nam iaculis, nibh ac tristique pretium, purus eros eleifend dui, nec bibendum ligula turpis in risus. Aenean eget ornare nisl, in efficitur metus. Duis elementum in justo a feugiat. Duis purus risus, commodo nec vulputate id, ornare in nunc. Donec sit amet quam porta, commodo sem eu, ornare mi. Proin porttitor tincidunt mi, id lobortis lorem tempor eget. Cras neque purus, feugiat at elit vitae, tincidunt faucibus quam. Aenean laoreet ante eu lectus auctor hendrerit. Aliquam mattis lacus mauris, nec laoreet lectus malesuada eu. In hac habitasse platea dictumst. Aliquam sodales, felis non aliquam maximus, mauris dui dignissim urna, sed dictum nibh felis eu ipsum. Etiam quam sem, maximus non convallis id, consectetur sit amet augue. Mauris rhoncus ex quis dolor auctor, sit amet mollis ipsum vestibulum.",
        image: "http://lorempixel.com/642/300/abstract"
    });
});