{

  class PositionInfo extends Backbone.View {

    get el() {
      return ".position-info"
    }

    get events() {
      return {
        "click .show-position-actions" : "_showPositionActions"
      }
    }

    initialize() {
      this.$positionDescription = this.$(".position-description")
      this.listenForEvents()
    }

    listenForEvents() {
      this.listenTo(chess, "change:i", (model, i) => {
        let prevI = i - 1
        if (prevI < 0) {
          this.$el.addClass("invisible")
          return
        }
        let moveStr = `${chess.getMovePrefix(prevI)} ${chess.get("moves")[prevI]}`
        this.$el.removeClass("invisible")
        this.$positionDescription.text(moveStr)
      })
    }

  }


  Components.PositionInfo = PositionInfo

}