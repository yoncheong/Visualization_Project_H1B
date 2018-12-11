var w = 700,
	h = 700;

var circleWidth = 5;

var nodes = [
	{name: 'H1B Petitions'}, //parent node; 1st level
	{name: 'Location'},	//rest are child nodes; second level
	{name: 'Education'},
	{name: 'Full Time position'},
	{name: 'Economics'},
	{name: 'Immigration Policy'},
	{name: 'Employer'},
	{name: 'Job Title'},
	{name: 'Prevailing Wage'},
	{name: 'Gender'},
	{name: 'Regions'},
];

var links = [
	{source: nodes[1], target: nodes[0]},
	{source: nodes[2], target: nodes[0]},
	{source: nodes[3], target: nodes[0]},
	{source: nodes[4], target: nodes[0]},
	{source: nodes[5], target: nodes[0]},
	{source: nodes[6], target: nodes[0]},
	{source: nodes[7], target: nodes[2]},
	{source: nodes[8], target: nodes[2]},
	{source: nodes[9], target: nodes[6]},
	{source: nodes[10], target: nodes[1]},
];

var myChart = d3.select('#chart')
	.append('svg')
	.attr('width', w)
	.attr('height', h);

var force = d3.layout.force()
	.nodes(nodes)
	.links([]) //place holder
	.gravity(0.1)
	.charge(-1000)
	.size([w, h]);

var link = myChart.selectAll('line')
	.data(links).enter().append('line')
	.attr('stroke', '#000');

var node = myChart.selectAll('circle')
	.data(nodes).enter()
	.append('g')
	.call(force.drag) //passing the force layout variable created

//continuing with var node methods
node.append('circle')
	.attr('cx', function(d) {return d.x})
	.attr('cy', function(d) {return d.y})
	.attr('r', circleWidth)
	.attr('fill', '#ed2a3e')

node.append('text')
	.text(function(d){return d.name})
	.attr('font-family', 'Georgia')
	.attr('fill', function(d, i){
		if (i>0)
			{return '#2422a3'}
		else
			{return '#b51729'}
	})
	.attr('font-size', function(d,i) {
		if (i>0)
			{return '1em'}
		else
			{return '1.7em'}
	})
	.attr('text-anchor', function(d,i){
		if (i>0)
			{return 'beginning'}
		else
			{return 'end'}
	})
	.attr('x', function(d, i){
		if (i>0)
			{return circleWidth + 7}
		else
			{return circleWidth - 20}
	})


force.on('tick', function(e) {
	node.attr('transform', function(d) {
		return 'translate('+d.x+','+d.y+')'
	})

	link.attr('x1', function(d) {return d.source.x})
		.attr('y1', function(d) {return d.source.y})
		.attr('x2', function(d) {return d.target.x})
		.attr('y2', function(d) {return d.target.y})
})

force.start()
