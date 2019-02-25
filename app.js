const List = (props) => {
    VoteCount = {
        'React': 0,
        'Angular': 0,
        'Vue': 0, 
        'Ember': 0,
    }

    NotifyVote = (string) => {
        VoteCount[string] ++
        text = 'You voted for ' + string + '. ' + string + ' now has ' + VoteCount[string] + ' votes!'
        alert(text)
    }

    const listItems = props.items.map((itemString) => {
        return React.createElement('button', {key: {itemString} , className: 'btn mb-2' , onClick: () => this.NotifyVote(itemString)}, itemString);
    });
    return React.createElement('div', { style: { display: 'flex', flexDirection: 'column' } }, listItems);
}

const MyList = () => {
    ItemsList = React.createElement(List, {items : ['React', 'Angular', 'Vue', 'Ember']}, null)
    Title = React.createElement('h6', null, 'Vote for your JS library!')
    Container = React.createElement('div', null, [Title, ItemsList])
    return ReactDOM.render(Container, document.getElementById('container'));
}

MyList()