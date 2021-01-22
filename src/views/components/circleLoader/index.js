export default function CircleLoader({ loaderText = "" }) {
  return `<div class="loadIndicator load8">
      <div class="outer">
        <div class="middle">
          <div class="inner">
            <div class="loader" />
            <div class="text">${loaderText}</div>
          </div>
        </div>
      </div>
    </div>`;
}
