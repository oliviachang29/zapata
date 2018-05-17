var people = [
  {src: '../assets/images/people/zapata.jpg', name: "Emiliano Zapata"},
  {src: '../assets/images/people/huerta.jpg', name: "Victoriano Huerta", 
    desc: "Born to poor peasants, Huerta rose to the rank of general under Díaz, who he admired. As general, he suppressed uprisings and defended Díaz until his resignation in 1911. He served under Madero as chief of staff of the army, but secretly plotted Madero’s assassination. When Madero was assassinated on his orders, he assumed a despotic rule over Mexico, dissolving the congress and establishing a dictatorship. After heavy opposition, Huerta fled to the US in 1915.", 
    relationship: "Enemy. Zapata hated Huerta's conservatism and his many atrocities in southern Mexico."},
  {src: '../assets/images/people/obregon.jpg', name: "Álvaro Obregón", 
    desc: "A military genius despite his humble upbringing, Obregón did not participate in Díaz’s ouster, but fought for Madero against Orozco’s rebellion. After Madero’s assassination, he joined forces with Carranza against Huerta, and continued to fight against Villa and Zapata. He became disillusioned with Carranza’s policies and ran successfully for president in 1920. He was assassinated before taking the presidency a second term in 1928.", 
    relationship: "Opposed a common enemy, but generally adversarial. Zapata sided with Villa, who hated Carranza and Obregón."},
  {src: '../assets/images/people/carranza.jpg', name: "Venustiano Carranza", 
    desc: "As governor of Coahuila, Carranza joined the revolution when Madero started the struggle against Díaz. When Madero was assassinated, Carranza wrote the Plan de Guadalupe, calling for Huerta’s resignation and the restoration of the constitutional government. Carranza supported political, but not social, reform, and under his leadership he did little to institute social change. He was assassinated after his general, Obregón, rebelled against his attempt to choose a presidential successor in 1920.", 
    relationship: "Opposed a common enemy, but generally adversarial. Carranza was unwilling to enact agrarian reform, prompting Zapata’s opposition. Between 1915-1917 Carranza and Zapata’s forces fought for control of Mexican land."},
  {src: '../assets/images/people/villa.jpg', name: "Francisco Pancho Villa", 
    desc: "Originally a bandit from northern Mexico, Villa answered Madero’s call to arms. During Madero’s reign Villa fought against Orozco’s rebellion, and when Madero was assassinated he joined forces with Zapata and Carranza in overthrowing Huerta. Once Huerta was overthrown, Villa fought against Carranza. At one point Villa attacked Columbus, NM, hoping to steal ammunition. Though his mission was unsuccessful, it cemented Villa’s reputation as a daring bandit. Villa also signed a movie contract with an American newsreel company, which filmed him in battle.",
    relationship: "Ally. Zapata fought with Villa against Díaz, Huerta and Carranza."},
  {src: '../assets/images/people/madero.jpg', name: "Francisco I. Madero", 
    desc: "Madero was born into Mexico’s 5th-wealthiest family. In 1908, he published his highly popular book, La sucesión presidencial en 1910, calling for honest elections. When Madero appeared likely to win the presidency, Díaz jailed Madero, who escaped to San Antonio and wrote the Plan de San Luis Potosi, imploring the Mexican people to rebel against Díaz. Díaz was defeated in 1911, and Madero was voted into the presidency. However, as president, Madero was unable to appease pressure from Zapata and Orozco, and was assassinated by Huerta in 1913.", 
    relationship: "Ally turned enemy. Without Zapata’s assistance in defeating Díaz’s forces, Madero might never have been elected president. However, as president Madero ignored Zapata’s pleas for land reform."},
  {src: '../assets/images/people/orozco.jpeg', name: "Pascual Orozco", 
    desc: "Orozco was a self-made merchant who joined Madero’s movement in 1910. He commanded rural forces in Chihuahua, and fought in some of the first battles. His forces were key in defeating Díaz. Orozco later turned against Madero because Madero did not comply with his own Plan de San Luis Potosi. Orozco recognized Huerta as president, who then named him General of Federal Troops, fighting against Carranza and Villa. When Huerta was overthrown, Orozco was exiled to El Paso, where he was killed by a group of Texas Rangers in 1915.", 
    relationship: "Ally turned enemy. Zapata and Orozco both fought against Díaz, and in his Plan de Ayala Zapata named Orozco as leader of the revolution. However, when Orozco sided with Huerta, who Zapata despised, Zapata turned against Orozco."},
]
var nodes = new vis.DataSet([
    {id: 1, shape: 'circularImage', image: people[0]['src'], chosen: {node: false}},
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
      chosen: {edge: false},
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
  if (node-1 != 0) {
    $("#profile-img").attr("src",people[node-1]['src']);
    $("#profile-name").text(people[node-1]['name']);
    $("#profile-desc").text(people[node-1]['desc']);
    $("#profile-relationship").text(people[node-1]['relationship']);
    $('#profile-container').css({
      opacity: '1'
    });
    $('#hover-to-see').css({
      opacity: '0'
    });
  }
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


network.on("hoverEdge", function (params) {
  console.log(params)
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
