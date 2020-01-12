"use strict";

// Get canvas and context property
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "rgb(255,255,255)";



var snake = [];
var UP = 38;
var DOWN = 40;
var LEFT = 37;
var RIGHT = 39;

function drawSegment(xPos, yPos){
    ctx.fillStyle = "rgb(255,255,255)";
    ctx.fillRect(xPos, yPos, 10, 10);
}
class Segment{
    constructor(xPos, yPos){
        this.xPos = xPos;
        this.yPos = yPos;
    };
};

function initSnake(){
    snake = [
    new Segment(80,50),
    new Segment(65,50),
    new Segment(50,50),
    new Segment(35,50)
    ]
    for (var x = 0; x < snake.length ; x++){
        console.log(snake[x].xPos)
        drawSegment(snake[x].xPos, snake[x].yPos);
    }
};

initSnake();