FROM python:3.11-slim

RUN useradd -m yuri

WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

USER yuri

COPY . .

CMD ["python", "app.py"]