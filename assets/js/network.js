var people = [
    {src: '../assets/images/people/zapata.jpg', name: "Emiliano Zapata"},
    {src: '../assets/images/people/huerta.jpg', name: "Victoriano Huerta"},
    {src: '../assets/images/people/obregon.jpg', name: "Álvaro Obregón"},
    {src: '../assets/images/people/carranza.jpg', name: "Venustiano Carranza"},
    {src: '../assets/images/people/villa.jpg', name: "Francisco Pancho Villa"},
    {src: '../assets/images/people/madero.jpg', name: "Francisco I. Madero"},
    {src: '../assets/images/people/orozco.jpeg', name: "Pascual Orozco"},
]
var nodes = new vis.DataSet([
    {id: 1, shape: 'circularImage', image: people[0]['src']},
    {id: 2,  shape: 'circularImage', image: people[1]['src']},
    {id: 3,  shape: 'circularImage', image: people[2]['src']},
    {id: 4,  shape: 'circularImage', image: people[3]['src']},
    {id: 5,  shape: 'circularImage', image: people[4]['src']},
    {id: 6, shape: 'circularImage', image: people[5]['src']},
    {id: 7, shape: 'circularImage', image: people[6]['src']},
]);

var edges = new vis.DataSet([
    {from: 1, to: 2},
    {from: 1, to: 3},
    {from: 1, to: 4},
    {from: 1, to: 5},
    {from: 1, to: 6},
    {from: 1, to: 7},
]);

var container = document.getElementById('zapata-network');

var data = {
    nodes: nodes,
    edges: edges
};
var options = {
	clickToUse: true,
	nodes: {
		color: {
            border: '#EDEDED', 
            background: 'white',
            highlight: '#4A4A4A',
            hover: {
                border: '#4A4A4A'
            },
        },
        borderWidth: 5,
        borderWidthSelected: 5,
		font: {
            face: 'Pathway Gothic One', 
            size: 20,
        },
		labelHighlightBold: false,
        size: 40
	},
	edges: {
        color: {
            color: '#EDEDED',
            hover:'#EDEDED',
            highlight: '#4A4A4A'
        },
        width: 2,
		font: {face: 'Cardo'},
		hoverWidth: 0,
        selectionWidth: 1,
		labelHighlightBold: false
	},
	layout: {
		randomSeed: 93439
	},
	interaction: {
		dragView: false,
		dragNodes: false,
		hover: true,
		zoomView: false
	},
	manipulation: {
		enabled: false
	},
	physics: {
		enabled: false
	}
};  

function showNode (node) {
  $("#profile-img").attr("src",people[node-1]['src']);
  $("#profile-name").text(people[node-1]['name']);
  $("#profile-img").css({
    width: '200px'
  })
  $('#profile-container').css({
    opacity: '1'
  });
  $('#hover-to-see').css({
    opacity: '0'
  });
}

function hideNode() {
  $('#profile-container').css({
    opacity: '0'
  });
  $('#hover-to-see').css({
    opacity: '1'
  });
}

var network = new vis.Network(container, data, options);

var nodeSelected = -1; // -1 is no node selected

network.on("hoverNode", function (params) {
  showNode(params.node);
});

network.on("blurNode", function (params) {
  if (nodeSelected == -1) {
    hideNode()
  } else {
    showNode(nodeSelected)
  }
});

network.on("click", function (params) {
  showNode(params.nodes[0]);
  nodeSelected = params.nodes[0];
});

network.on("deselectNode", function (params) {
  nodeSelected = -1;
  hideNode()
});