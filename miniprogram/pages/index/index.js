Page({
  data: {
    principal: null,
    yieldRate: null,
    year: null,
    result: ''
  },

  calculate() {
    const principal = this.data.principal
    const yieldRate = this.data.yieldRate
    const year = this.data.year

    if (!principal || principal <= 0) {
      wx.showToast({
        icon: 'none',
        title: '请正确输入本金！'
      })
      return
    }
    if (!yieldRate || yieldRate <= 0) {
      wx.showToast({
        icon: 'none',
        title: '请正确输入年化收益率！'
      })
      return
    }
    if (!year || year <= 0) {
      wx.showToast({
        icon: 'none',
        title: '请正确输入投资年限！'
      })
      return
    }

    // 复利 = 本金 * (1 + 年化)^年
    const result = principal * ((1 + yieldRate / 100) ** year)
    this.setData({
      result
    })
  },

  principalInput(e) {
    this.setData({
      principal: e.detail.value
    })
  },

  yieldRateInput(e) {
    this.setData({
      yieldRate: e.detail.value
    })
  },

  yearInput(e) {
    this.setData({
      year: e.detail.value
    })
  },

  clear() {
    this.setData({
      principal: null,
      yieldRate: null,
      year: null,
      result: ''
    })
  }
})
