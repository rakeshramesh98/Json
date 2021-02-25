
  
  // Actual Code
  class App2 extends React.Component {  
    constructor(props){
      super(props)
      this.state = {
        selectedOptions: {},
        codeShowing: false,
        debug: false
      }
    }
    
    button(){
      return (
        <div className="data-structure-button">
              <div onClick={() => this.setState({codeShowing: !this.state.codeShowing})} 
               className={classNames('fa', 'fa-2x', 'fa-code', 'actual', this.state.codeShowing && 'active-button')}>
             </div>
        </div>
  
        )
    }
    
    debugButton(){
      return (
        <div className="debug-button">
          <div onClick={() => this.setState({debug: !this.state.debug})} 
            className={classNames(
              'fa',
              'fa-2x',
              'fa-bug',
              'actual-debug',
              this.state.codeShowing && 'active-debug-button',
              this.state.debug && 'is-debugging')}>
          </div>
        </div>
      )
    }
    
    getDataStructureDisplay(){
      return (
  
          <pre className="data-structure"><code class="json">{JSON.stringify(this.state.selectedOptions, null, 3)}</code></pre>
      )
    }
    
    render() {
      const {selectedOptions} = this.state;
       return (
         <div className="container">
           <div className="wrapper">
             <h1>Toppings</h1>
             <OptionsList2 
               options={toppingOptions} 
               onChange={(selectedOptions) => {
                 if(this.state.debug){
                   alert(`App Component:\n\nSetting selectedOptions state to\n\n${JSON.stringify(selectedOptions, null, 3)}\n\nThen re-rendering!`)
                 }
                 this.setState({selectedOptions})
               }}
               selectedOptions={selectedOptions} 
               isFirst={true}
               debug={this.state.debug}
               />
             {this.button()}
             {this.debugButton()}
             
             {this.state.codeShowing && this.getDataStructureDisplay()}
           </div>
         </div>
       )
    }
  }
  const OptionsList2 = ({ options, selectedOptions, onChange, isFirst, debug }) => {
   
    const handleCheckboxClicked = (selectedOptionId) => {
      let additionalText = `${selectedOptionId} is already selected, to deselect it we'll remove it from the current selectedOptions structure\n\n${JSON.stringify(selectedOptions, null, 3)}`;
      if(selectedOptions[selectedOptionId]){
        delete selectedOptions[selectedOptionId];
      } else {
        selectedOptions[selectedOptionId] = {}
        additionalText = `${selectedOptionId} is not currently selected, to select it we'll add "${selectedOptionId}: {}" to the current selectedOptions structure\n\n${JSON.stringify(selectedOptions, null, 3)}`;
      }
      if(debug){
        alert(`handleCheckboxClicked():\n\nClicked ${selectedOptionId} checkbox\n\n${additionalText}\n\nThen we'll call the current OptionList's onChange() function with the updated selectedOptions structure`);
      }
      onChange(selectedOptions)
    }
    
    const handleSubOptionsListChange = (optionId, subSelections) => {
      if(debug){
        alert(`handleSubOptionsListChange():\n\nThe onChange() function of ${optionId} was just called with the following sub options\n\n${JSON.stringify(subSelections, null, 3)}\n\nWe'll set "${optionId}" equal to that and pass the entire subOption structure at this level up to the parent.\n\n${JSON.stringify(selectedOptions, null, 3)}`);
      }
      selectedOptions[optionId] = subSelections;
      onChange(selectedOptions);
    }
    
    return (
      <div>
        {options.map(option => (
            <ul className={isFirst && "firstUL"}>
              <Checkbox2 
                selected={selectedOptions[option.id]} 
                label={option.name} 
                onChange={() => {handleCheckboxClicked(option.id)}}
              />
              {(option.subOptions.length > 0 && selectedOptions[option.id]) &&
                <OptionsList2 
                  options={option.subOptions} 
                  selectedOptions={selectedOptions[option.id]} 
                  onChange={(subSelections) => handleSubOptionsListChange(option.id, subSelections)}
                  debug={debug}
                />
              }
            </ul>
          )
        )}
      </div>
    )
  }
  const Checkbox2 = ({ selected, label, onChange }) => {
    return (
        <div className="checkbox">
        <div 
          className={
            classNames('fa', 'fa-2x', 'checkbox__icon', selected ? 'fa-check-square' : 'fa-square')} onClick={() => onChange(!selected)}></div>    
        <div className="checkbox__label">{label}</div>
      </div>
    )
  }
  ReactDOM.render(<App2 />, document.querySelector('#app'))
  