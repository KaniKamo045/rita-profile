document.addEventListener('DOMContentLoaded', () => {
    const ritaImage = document.getElementById('rita-img');
    const introTextElement = document.querySelector('#intro .text-content p'); // p 태그 자체를 선택
    const originalText = introTextElement.textContent; // p 태그의 원래 텍스트
    const hoverText = "만나서 반가워! 나랑 친구가 되어줄래? 🌹";

    if (ritaImage && introTextElement) {
        // 이미지에 마우스를 올렸을 때
        ritaImage.addEventListener('mouseenter', () => {
            introTextElement.style.opacity = '0';
            setTimeout(() => {
                introTextElement.textContent = hoverText;
                introTextElement.style.opacity = '1';
                // fontWeight만 변경하여 텍스트 길이에 따른 레이아웃 변경 최소화
                introTextElement.style.fontWeight = 'bold';
            }, 200);
        });

        // 이미지에서 마우스를 떼었을 때
        ritaImage.addEventListener('mouseleave', () => {
            introTextElement.style.opacity = '0';
            setTimeout(() => {
                introTextElement.textContent = originalText;
                introTextElement.style.opacity = '1';
                introTextElement.style.fontWeight = 'normal';
            }, 200);
        });
    }
});