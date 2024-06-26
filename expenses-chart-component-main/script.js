document.addEventListener('DOMContentLoaded', () => {
    const data = [
        { "day": "mon", "amount": 17.45 },
        { "day": "tue", "amount": 34.91 },
        { "day": "wed", "amount": 52.36 },
        { "day": "thu", "amount": 31.07 },
        { "day": "fri", "amount": 23.39 },
        { "day": "sat", "amount": 43.28 },
        { "day": "sun", "amount": 25.48 }
      ];

      const secondContainer = document.querySelector('.second-container');

      const chartContainer = document.createElement('div');
      chartContainer.className = 'chart-container';
      secondContainer.appendChild(chartContainer);

      data.forEach(item => {
        const barContainer = document.createElement('div');
        barContainer.className = 'bar-container';
        
        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.height = `${item.amount * 3}px`;

        const barLabel = document.createElement('p');
        barLabel.className = 'bar-label';
        barLabel.textContent = `${item.amount}`;

        const dayLabel = document.createElement('p');
        dayLabel.className = 'day-label';
        dayLabel.textContent = item.day;

        barContainer.appendChild(barLabel);
        barContainer.appendChild(bar);
        barContainer.appendChild(dayLabel);
        chartContainer.appendChild(barContainer);
      });
});