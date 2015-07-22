var data = [
    {author: "Donald Knuth", text: "Premature optimization is the root of all evil."},
    {author: "Linus Torvalds", text: "Talk is cheap. Show me the code."},
    {author: "John Woods", text: "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live."}
];

var Quote = React.createClass({
    render: function () {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    {this.props.author}
                </div>
                <div className="panel-body">
                    {this.props.children}
                </div>
            </div>
        );
    }
});

var QuoteList = React.createClass({
    render: function () {
        var quote = this.props.data.map(function (quote) {
            return (
                <Quote author={quote.author}>
                    {quote.text}
                </Quote>
            );
        });
        return (
            <div className="quoteList">
                {quote}
            </div>
        );
    }
});

var QuotesBox = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Quotes</h1>
                <QuoteList data={this.props.data}/>
            </div>
        );
    }
});

React.render(
    <QuotesBox data={data}/>,
    document.getElementById('content')
);