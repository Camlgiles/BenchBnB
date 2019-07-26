import React from 'react'
import BenchIndexItem from './bench_index_items'

class benchIndex extends React.Component {
  componentDidMount() {
    this.props.fetchBenches();
  }

  render() {
    const { benches } = this.props;
   //  debugger;
    return (
      <div>
        <ul>
          {benches.map(bench => {
            return <BenchIndexItem key={`bench${bench.id}`} bench={bench} />;
          })}
        </ul>
      </div>
    );
  }

   // const BenchIndex = ({ benches }) => (
   //    <div>
   //       <h1>Benches: </h1>
   //       {benches.map(bench => (
   //          <BenchIndexItem
   //             bench={bench}
   //             key={bench.id}
   //          />
   //       ))}
   //    </div>
   // );
}

export default benchIndex;