// The subheader with action buttons under the main title bar

{

  class SubHeader extends Backbone.View {

    get el() {
      return ".sub-header"
    }

    get events() {
      return {
        "click .reset-board" : "_resetBoard",
        "click .undo"        : "_undo"
      }
    }

    initialize() {
      this.$title = this.$(".sub-header-title")
      this.listenForEvents()
      this.initSubviews()
    }

    listenForEvents() {
      this.listenTo(openingState, "change:opening", (model, opening) => {
        this.$title.text(opening)
      })
    }

    initSubviews() {
      this.$("[data-tooltip]").each((i, e) => {
        console.dir($(e))
        new Views.Tooltip({ el: $(e) })
      })
    }

    _resetBoard() {
      world.trigger("reset")
    }

    _undo() {
      world.rewind()
    }

  }


  Views.SubHeader = SubHeader

}
