import React, { Component } from 'react';

class ProjectCategories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                { key: 'all', name: 'All' },
                { key: 'landing', name: 'Landing-page' },
                { key: 'multi', name: 'Multi-page' },
            ],
        };
    }

    render() {
        return (
            <div className="flex flex-row justify-center flex-wrap mx-6 gap-y-1 gap-6">
                {this.state.categories.map(category => (
                    <div
                        key={category.key}
                        onClick={() => this.props.chooseCategory(category.key)}
                        className={`cursor-pointer flex p-3 px-5 ${this.props.activeCategory === category.key ? 'bg-black text-white' : 'bg-white text-black'} bg-opacity-50 njfonts text-base md:text-xl rounded-[40px] gap-6 mb-6`}>
                        {category.name}
                    </div>
                ))}
            </div>
        );
    }
}

export default ProjectCategories;
