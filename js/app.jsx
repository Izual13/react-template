var data = [
    {author: "Donald Knuth", text: "Premature optimization is the root of all evil."},
    {author: "Linus Torvalds", text: "Talk is cheap. Show me the code."},
    {author: "John Woods", text: "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live."}
];

var Comment = React.createClass({
    render: function () {
        return (
            <div className="comment panel panel-default">
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

var CommentList = React.createClass({
    render: function () {
        var commentNodes = this.props.data.map(function (comment) {
            return (
                <Comment author={comment.author}>
                    {comment.text}
                </Comment>
            );
        });
        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
});

var CommentBox = React.createClass({
    render: function () {
        return (
            <div className="commentBox">
                <h1>Quotes</h1>
                <CommentList data={this.props.data}/>
            </div>
        );
    }
});

React.render(
    <CommentBox data={data}/>,
    document.getElementById('content')
);