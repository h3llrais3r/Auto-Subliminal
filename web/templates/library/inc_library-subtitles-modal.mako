<div id="subtitlesModal" class="modal fade" tabindex="-1">

    <div class="modal-dialog">

        <div class="modal-content">

            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h3 class="modal-title">Save hardcoded subtitle languages</h3>
            </div>

            <div class="modal-body">
                <span>Select 1 or more hardcoded subtitle languages</span>
                <br>
                <multiselect v-model="selectedHardcodedLanguages"
                             :options="languages"
                             :multiple="true"
                             :taggable="true"
                             tag-placeholder=""
                             label="name"
                             track-by="alpha2">
                </multiselect>
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-default" @click="saveHardcodedSubtitles($event)">Save</button>
            </div>

        </div>

    </div>

</div>