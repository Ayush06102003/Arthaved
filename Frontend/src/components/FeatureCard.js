import React from 'react';
import '../styles/featurecard.css';
const FeatureCard = ({feature}) => {
    

  return (
    <div className="feature-card">
      <ul>
        {feature.map((feature) => (
          <li key={feature.title}>
            <i className={`fas fa-${feature.icon}`} />
            {feature.title}
          </li>
          
        ))}
      </ul>
    </div>
  );
};

export default FeatureCard;

// const features = [
    //     {
    //       icon: 'clock',
    //       title: 'Dynamic Budgeting Interface',
    //     },
    //     {
    //       icon: 'chart-line',
    //       title: 'Forecasting Models',
    //     },
    //     {
    //       icon: 'cog',
    //       title: 'Expense Categorization AI',
    //     },
    //     {
    //       icon: 'sync-alt',
    //       title: 'Zero-based Budgeting AI Assistant',
    //     },
    //     {
    //       icon: 'chart-bar',
    //       title: 'Budget Health Metrics',
    //     },
    //     {
    //       icon: 'chart-area',
    //       title: 'Historical Budget Trends Analysis',
    //     },
    //     {
    //       icon: 'bullhorn',
    //       title: 'Variable Expense Predictor',
    //     },
    //     {
    //       icon: 'cube',
    //       title: 'What-If Scenario Planning',
    //     },
    //   ];
      
    //   const features2 = [
    //     {
    //       icon: 'credit-card',
    //       title: 'AI Savings Recommendations',
    //     },
    //     {
    //       icon: 'cog',
    //       title: 'Automated Investment Analysis',
    //     },
    //     {
    //       icon: 'home',
    //       title: 'Retirement Planning AI Advisor',
    //     },
    //     {
    //       icon: 'people-carry',
    //       title: 'Goal-based Investment Allocation',
    //     },
    //     {
    //       icon: 'database',
    //       title: 'Risk Tolerance Assessment Tool',
    //     },
    //     {
    //       icon: 'star',
    //       title: 'Savings Milestone Tracker',
    //     },
    //     {
    //       icon: 'wifi',
    //       title: 'Educational Investment Content',
    //     },
    //     {
    //       icon: 'arrow-up',
    //       title: 'Market Trend AI Analysis',
    //     },
    //   ];