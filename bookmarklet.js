javascript: function Gosling(i, g) {
    this.ratio = i, this.imageurl = g
}

function Randomize(i) {
    return Math.floor(Math.random() * i.length)
}

function imageRatio(i) {
    var g = i.height / i.width;
    return g > 1 ? "vertical" : 1 === g ? "square" : 1 > g ? "horizontal" : void 0
}
var getGosling = {
        init: function(i) {
            this.myGosling = i
        },
        horizontal: function() {
            return this.myGosling.filter(function(i) {
                return "horizontal" === i.ratio
            })
        },
        vertical: function() {
            return this.myGosling.filter(function(i) {
                return "vertical" === i.ratio
            })
        },
        square: function() {
            return this.myGosling.filter(function(i) {
                return "square" === i.ratio
            })
        }
    },
    myGosling = [new Gosling("horizontal", "https://wendy0730.github.io/heygirl/dogs/horizontal1.jpg"),
     new Gosling("horizontal"，"https://wendy0730.github.io/heygirl/dogs/horizontal2.jpg"), 
      new Gosling("vertical", "https://wendy0730.github.io/heygirl/dogsvertical.png"), 
new Gosling("vertical", "https://wendy0730.github.io/heygirl/dogs/vertical2.jpg"), 
new Gosling("vertical", "https://wendy0730.github.io/heygirl/dogs/vertical3.jpg"),
new Gosling("vertical", "https://wendy0730.github.io/heygirl/dogs/vertical4.jpg"),
new Gosling("vertical", "http://heygirl.io/img/gosling-vert-6.jpg"),


new Gosling("square", "http://heygirl.io/heygril-master/dogs/square1.jpg"),
new Gosling("square", "http://heygirl.io/heygril-master/dogs/square2.jpg")





       new Gosling("vertical", "https://wendy0730.github.io/heygirl/dogs/vertical4.jpg"), 
       new Gosling("vertical", "http://heygirl.io/img/gosling-vert-4.jpg"),
        new Gosling("vertical", "http://heygirl.io/img/gosling-vert-5.gif"), 
        new Gosling("vertical", "http://heygirl.io/img/gosling-vert-6.jpg"), 
        new Gosling("vertical", "http://heygirl.io/img/gosling-vert-7.jpg"), 
        new Gosling("vertical", "http://heygirl.io/img/gosling-vert-8.jpg"), 
        new Gosling("vertical", "http://heygirl.io/img/gosling-vert-9.jpg"), 
        new Gosling("vertical", "http://heygirl.io/img/gosling-vert-10.jpg"),
         new Gosling("vertical", "http://heygirl.io/img/gosling-vert-11.jpg"), 
         new Gosling("vertical", "http://heygirl.io/img/gosling-vert-12.jpg"), 
         new Gosling("vertical", "http://heygirl.io/img/gosling-vert-13.png"), 
         new Gosling("vertical", "http://heygirl.io/img/gosling-vert-14.jpg"), 
         new Gosling("vertical", "http://heygirl.io/img/gosling-vert-15.jpg"), 
         new Gosling("vertical", "http://heygirl.io/img/gosling-vert-16.gif"), 
         new Gosling("vertical", "http://heygirl.io/img/gosling-vert-17.jpg"), 
         new Gosling("vertical", "http://heygirl.io/img/gosling-vert-18.jpg"), 
         new Gosling("vertical", "http://heygirl.io/img/gosling-vert-19.png"), 
         new Gosling("square", "http://heygirl.io/img/gosling-square-1.jpg"), new Gosling("square", "http://heygirl.io/img/gosling-square-2.jpg"), new Gosling("square", "http://heygirl.io/img/gosling-square-3.jpg"), new Gosling("square", "http://heygirl.io/img/gosling-square-4.gif"), new Gosling("square", "http://heygirl.io/img/gosling-square-5.gif"), new Gosling("square", "http://heygirl.io/img/gosling-square-6.png"), new Gosling("square", "http://heygirl.io/img/gosling-square-7.gif"), new Gosling("square", "http://heygirl.io/img/gosling-square-8.gif"), new Gosling("square", "http://heygirl.io/img/gosling-square-9.gif"), new Gosling("square", "http://heygirl.io/img/gosling-square-10.gif"), new Gosling("square", "http://heygirl.io/img/gosling-square-11.jpg"), new Gosling("square", "http://heygirl.io/img/gosling-square-12.jpg"), new Gosling("square", "http://heygirl.io/img/gosling-square-13.jpg"), new Gosling("square", "http://heygirl.io/img/gosling-square-14.png")];
! function(i) {
    getGosling.init(myGosling);
    for (var g = i.getElementsByTagName("img"), o = g.length, n = 0; o > n; n++) {
        var l = imageRatio(g[n]),
            t = Randomize(getGosling[l]()),
            e = getGosling[l]()[t];
        g[n].src = e.imageurl
    }
}(document);