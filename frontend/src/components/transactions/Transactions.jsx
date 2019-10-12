import * as TransactionsApi from "../../libraries/explorer-wamp/transactions";

import TransactionsList from "./TransactionsList";

export default class extends React.PureComponent {
  state = {
    transactions: null
  };

  componentDidMount() {
    this.fetchTransactions();
  }

  componentDidUpdate() {
    this.fetchTransactions();
  }

  render() {
    if (this.state.transactions === null) {
      return null;
    }
    return <TransactionsList transactions={this.state.transactions} />;
  }

  fetchTransactions = async () => {
    const transactions = await TransactionsApi.getTransactions({
      signerId: this.props.account,
      receiverId: this.props.account,
      blockHash: this.props.blockHash
    });
    this.setState({ transactions });
  };
}
