import BaseRule from './BaseRule'
import { isCheckboxElement } from '../../lib/helpers'

export default class CheckedRule extends BaseRule {

  validate (expected) {
    if (!this._isset()) return false
    return this._hasHTMLField() && isCheckboxElement(this.HTMLField) 
      ? this.HTMLField.checked === expected 
      : this.value == expected
  }

}