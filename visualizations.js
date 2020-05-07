// skills bar chart 
const skills = d3.select('.skills_chart');
const skills_svg = skills.append('svg')
                .attr('width','100%')
                .attr('height', '100%');

const margin = {
    "top":20,
    "bottom":20,
    "left":60,
    "right":20
};

const width = '100%';
const height = '100%';
const innerWidth = width-margin.left - margin.right;
const innerHeight = width-margin.top - margin.bottom;

const skills_group = skills_svg.append('g')
                            .attr('transform',`translate(${margin.left},${margin.top})`);

skills_group.append('text')
            .classed('title', true)
            .text('SKILLS ANALYSIS')
            .attr('x', '30')
            // .attr('y', '20');

const dataArray = [
    {
        skill:"HTML",
        proficiency:90,
    },
    {
        skill:"React",
        proficiency:60,
    },
    {
        skill:"vue",
        proficiency:50,
    }, 
    {
        skill:"laravel",
        proficiency:80,
    }, 
    {
        skill:"d3",
        proficiency:75,
    }, 
    {
        skill:"css",
        proficiency:83,
    },
    {
        skill:"sass",
        proficiency:70,
    },
    {
        skill:"Django",
        proficiency:75
    }
];

// scale
const xScale = d3.scaleLinear().domain([1, 100]).range([1, 500]);
const yScale = d3.scaleBand()
                    .domain(dataArray.map(d=>d.skill))
                    .range([1,330])
                    .padding(0.1);

// axes
const xAxis = d3.axisBottom(xScale)
                .tickSize(-325);
const yAxis = d3.axisLeft(yScale);
const xAxis_group = skills_group.append('g')
                .call(xAxis)
                .attr('transform',`translate(0,330)`);

xAxis_group.select('.domain').remove();

xAxis_group.append('text')
            .text('Proficiency')
            .classed('xAxis_label', true)
            .attr('x', '130')
            // .attr('y', '300')
            .attr('fill', 'black');

// update Selection
let bars = skills_group.selectAll('rect')
                .data(dataArray, d=>d.skill)
                .append('rect')
                .attr('width', d => xScale(d.proficiency))
                .attr('height', yScale.bandwidth())
                .attr('x', '0')
                // .attr('fill','#b0c6ee')
                .attr('y', d => yScale(d.skill));

// enter
bars = skills_group.selectAll('rect')
            .data(dataArray, d=>d.skill)
            .enter()
            .append('rect')
            .attr('width', d => xScale(d.proficiency))
            .attr('height', yScale.bandwidth())
            .attr('x', '0')
            // .attr('fill','#b0c6ee')
            .attr('y', d => yScale(d.skill));

// exit
bars.exit().remove();

// remove domain and tick lines
skills_group.append('g')
            .call(yAxis)
            .selectAll('.domain, .tick line')
            .remove();


// projects doughnant chart
const projects = d3.select('.projects_chart');
const projects_svg = projects.append('svg')
                .attr('width','100%')
                .attr('height', '100%');
