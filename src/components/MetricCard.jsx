import React from 'react';

const MetricCard = ({ label, value, delta, unit = '' }) => {
  const getDeltaColor = () => {
    if (!delta) return '';
    // Negative delta is good for latency/load time (reduction)
    // Positive delta is good for throughput/users (increase)
    const isReduction = label.toLowerCase().includes('latency') || 
                        label.toLowerCase().includes('load') ||
                        label.toLowerCase().includes('size');
    
    if (isReduction) {
      return delta < 0 ? 'metric-delta-positive' : 'metric-delta-negative';
    } else {
      return delta > 0 ? 'metric-delta-positive' : 'metric-delta-negative';
    }
  };

  const formatDelta = (delta) => {
    if (!delta) return null;
    const sign = delta > 0 ? '+' : '';
    return `${sign}${delta}%`;
  };

  return (
    <div className="metric-card">
      <div className="metric-label">{label}</div>
      <div className="metric-value">
        {value}
        {unit && <span className="metric-unit">{unit}</span>}
      </div>
      {delta && (
        <div className={`metric-delta ${getDeltaColor()}`}>
          {formatDelta(delta)} {delta < 0 ? '↓' : '↑'}
        </div>
      )}
    </div>
  );
};

export default MetricCard;
