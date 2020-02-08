import { Component } from 'react'
import Page from '../components/Page'
import AddComparison from '../components/AddComparison'
import Comparisons from '../components/Comparisons'
import LoadFile from '../components/LoadFile'
import SelectLanguage from '../components/SelectLaguage'
import repackResults from '../components/repack-results'
const { unpack } = require('jcb64')
const FileSaver = require('file-saver')
const { getInfo } = require('@alheimsins/b5-johnson-120-ipip-neo-pi-r')
const { languages } = getInfo()

export default class Compare extends Component {
  constructor (props) {
    super(props)
    this.state = {
      comparisons: [],
      scores: false,
      language: 'en',
      viewLanguage: 'en'
    }
    this.addComparison = this.addComparison.bind(this)
    this.getWidth = this.getWidth.bind(this)
    this.setLanguage = this.setLanguage.bind(this)
    this.loadComparison = this.loadComparison.bind(this)
    this.loadResult = this.loadResult.bind(this)
    this.handleSaveComparison = this.handleSaveComparison.bind(this)
    this.updateScores = this.updateScores.bind(this)
  }

  async componentDidMount () {
    document.addEventListener('DOMContentLoaded', this.getWidth(), false)
    window.addEventListener('resize', this.getWidth.bind(this))
  }

  addComparison (e) {
    e.preventDefault()
    let id = false
    const nameField = document.getElementById('comparisonName')
    const compressedDataField = document.getElementById('comparisonData')
    if (compressedDataField.value.startsWith('http')) {
      const url = new URL(compressedDataField.value)
      const params = new URLSearchParams(url.search.replace('?', ''))
      id = params.get('id')
    } else {
      id = compressedDataField.value
    }
    const data = unpack(id)
    this.updateScores({ name: nameField.value, data: data })
    nameField.value = ''
    compressedDataField.value = ''
  }

  updateScores (data) {
    const comparisons = this.state.comparisons
    comparisons.push(data)
    const language = this.state.viewLanguage
    const scores = repackResults(comparisons, language)
    this.setState({
      comparisons: comparisons,
      scores: scores
    })
  }

  loadResult (e) {
    e.preventDefault()
    const reader = new window.FileReader()
    const files = e.target.files
    const fileField = e.target
    const nameField = document.getElementById('comparisonName')
    reader.onload = () => {
      const text = reader.result
      const data = JSON.parse(text)
      this.updateScores({ name: nameField.value, data: data })
      nameField.value = ''
      fileField.value = ''
    }
    if (files.length === 1) {
      reader.readAsText(files[0])
    }
  }

  handleSaveComparison (e) {
    e.preventDefault()
    const comparisons = this.state.comparisons
    const file = new window.File([JSON.stringify(comparisons, null, 2)], 'b5-comparison.json', { type: 'text/json;charset=utf-8' })
    FileSaver.saveAs(file)
  }

  loadComparison (e) {
    e.preventDefault()
    const reader = new window.FileReader()
    const files = e.target.files
    reader.onload = () => {
      const text = reader.result
      const json = JSON.parse(text)
      const language = this.state.viewLanguage
      const scores = repackResults(json, language)
      this.setState({
        comparisons: json,
        scores: scores
      })
    }
    if (files.length === 1) {
      reader.readAsText(files[0])
    }
  }

  setLanguage (language) {
    const comparisons = this.state.comparisons
    const scores = repackResults(comparisons, language)
    this.setState({
      scores: scores,
      viewLanguage: language
    })
  }

  getWidth () {
    const width = document.documentElement.clientWidth * 0.9
    this.setState({ chartWidth: width >= 500 ? width : 500 })
  }

  render () {
    return (
      <Page>
        <div className='p-4'>
          <h1 className='text-4xl font-semibold text-center'>Big five comparison</h1>
          <SelectLanguage selectedLanguage={this.state.language} languages={languages} setLanguage={this.setLanguage} />
          <AddComparison addComparison={this.addComparison} />
          <LoadFile handler={this.loadResult} buttonTitle='Load result' />
          {this.state.scores ? <Comparisons data={this.state.scores} chartWidth={this.state.chartWidth} /> : null}
          {this.state.comparisons.length > 0 ? <button onClick={this.handleSaveComparison}>Save comparison</button> : null}
          {this.state.comparisons.length === 0 ? <LoadFile handler={this.loadComparison} buttonTitle='Load comparison' /> : null}
        </div>
      </Page>
    )
  }
}
