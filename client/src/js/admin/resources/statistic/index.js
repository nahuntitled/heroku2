import React from 'react'
import Chart from 'chart.js'

class Stat extends React.Component {
  state = {
    item: null,
    item1: null
  }

  componentDidMount() {
    fetch('/api/countrys').then(res => res.json()).then(item => this.setState({item}))
    fetch('/api/tours/stat').then(res => res.json()).then(item1 => this.setState({item1}))
    setTimeout(() => {
      var ctx = document.getElementById('canvas').getContext('2d')
      var data1 = [];
      var lab1 = [];
      var col = [];
      var color = [
        'Red',
        'Yellow',
        'Blue',
        'Green',
        'Gray',
        'Purple',
        'Brown',
        'Rose'
    ]
      this.state.item.map((item,i) => {
        data1.push(item.view); lab1.push(item.name); col.push(color[i])
      })
      var data = {
        datasets: [{
            data: data1,
            backgroundColor: col
        }],
        labels: lab1,
    };
      var myDoughnutChart = new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: {
          title: {
              display: true,
              text: 'Популярність країн по пошуку'
          }
        }
      });

      var ctx2 = document.getElementById('canvas2').getContext('2d')
      var data2 = [];
      var lab2 = [];
      var col2 = [];
      this.state.item1.map((item,i) => {
        data2.push(item.count); lab2.push(item._id); col2.push(color[i])
      })
      var data3 = {
        datasets: [{
            data: data2,
            backgroundColor: col2
        }],
        labels: lab2,
    };
      var myDoughnutChart2 = new Chart(ctx2, {
        type: 'doughnut',
        data: data3,
        options: {
          title: {
              display: true,
              text: 'Популярність країн по переглядам турів'
          }
        }
      });
      }, 500);
    }

  render() {
    return(
      <div className="flex" style={{ justifyContent: "start"}}>
        <div style={{ width:'500px', height:"800px" }}>
          <canvas id="canvas" width='500' height='500'></canvas>
        </div>
        <div style={{ width:'500px', height:"800px", marginLeft:'200px' }}>
          <canvas id="canvas2" width='500' height='500'></canvas>
        </div>
      </div>
    )
  }
}

export default Stat